<template>
  <div class="row">
    <div>{{suggestion}}</div>

    <div class="row">
        <div class="suggestion-container d-flex justify-content-center align-items-center">
            <div class="upvotes-container col-md-1">
                <i class="fa-solid fa-chevron-up"></i>
                <p class="upvotes">{{suggestion.upvotes}}</p>
            </div>
            <div class="col-md-1"></div>
            <div class="suggestion col-md-8 d-flex flex-column justify-content-start align-items-start">
                <h4 class="title">{{ suggestion.title}}</h4>
                <p class="desc"> {{suggestion.description}}</p>
                <p class="category">{{suggestion.category}}</p>
            </div>
            <div class="comment col-md-2">
                <i class="fa-solid fa-comment"></i>
                <span class="comments-no" v-if="suggestion.comments">&nbsp;{{suggestion.comments.length}}</span>
                <span class="comments-no" v-else-if="suggestion.comments == null">&nbsp;0</span>
            </div>
        </div>
    </div>
    <div class="row">
        <div class="comment-container">
            <div class="comment-number d-flex justify-content-start">
                <span>{{suggestion.comments? suggestion.comments.length : 0}}</span><span> Comments</span>
            </div>
            <div v-if="suggestion.comments && suggestion.comments.length > 0" >
                <div v-for="comment in suggestion.comments" :key="comment.id" class="row mb-4 comment">
                    <!-- <img  :src="`src/assets/user-images/${comment.user.image}`" :alt="user.comment.name"/> -->
                    <div class="col-md-2">
                        <img class="avatar" :src="`${comment.user.image.slice(1)}`" :alt="comment.user.name"/>
                    </div>
                    <div class="col-md-10">
                        <div class="d-flex justify-content-between">
                            <div class="d-flex flex-column align-items-start">
                                <p class="name">{{comment.user.name}}</p>
                                <p class="username">@{{comment.user.username}}</p>
                            </div>
                            <p class="d-flex justify-content-end align-items-center" @click="toggleReply(comment.id)">Reply</p>
                        </div>
                        <div>
                            <p class="text-start">{{comment.content}}</p>
                        </div>
                        <div v-if="comment.replies && comment.replies.length > 0" >
                            <div class="comment-replies row mb-4" v-for="(reply,index) in comment.replies" :key="index">
                                <div class="col-md-2">
                                    <img class="avatar" :src="`${reply.user.image.slice(1)}`" :alt="comment.user.name"/>
                                </div>
                                <div class="col-md-10">
                                    <div class="d-flex justify-content-between">
                                        <div class="d-flex flex-column align-items-start">
                                            <p class="name">{{reply.user.name}}</p>
                                            <p class="username">@{{reply.user.username}}</p>
                                        </div>
                                        <p class="d-flex justify-content-end align-items-center">Reply</p>
                                    </div>
                                    <div>
                                        <p class="text-start"><span class="fw-bold me-2">@{{reply.replyingTo}}</span>{{reply.content}}</p>
                                    </div>
                                </div>
                            </div>
                            <div v-if="replyingTo === comment.id" class="row">
                                <div class="col-md-10">
                                    <textarea v-model="replyContent" rows="3" class="form-control custom-textarea"></textarea>
                                </div>
                                <div class="col-md-2 mt-3 mt-md-0">
                                    <button @click="submitReply(comment.id)" class="btn reply-btn">Post Reply</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    </div>
    <div class="row">
     <div class="add-comment-container">
        <h1 class="add-comment-title d-flex">Add Comment</h1>
        <form @submit.prevent="addComment">
            <div class="form-group">
                <label for="addCommentTextArea" class="visually-hidden">Add Comment</label>
                <textarea v-model="newCommentText" @input="updateCharacterCount" name="" id="addCommentTextArea" rows="5" class="form-control custom-textarea" placeholder="Type your comment here"/>
            </div>
            <div class="d-flex align-items-center justify-content-between">
                <div class="character-count d-flex">
                    {{ charactersLeft }} Characters left
                </div>
                <div class="form-actions d-flex justify-content-end">
                    <button class="btn btn-blue">Submit Post</button>
                </div>
            </div>
           
        </form>
    </div>
  </div>
  </div>
</template>

<script>
import sourceData from '@/data.json'
console.log ("SourceData", sourceData)
export default {
    name: 'SuggestionDetail',
    props: {
        id : {
            type: String,
            required: true
        }
    },
    data (){
        return {
           newCommentText:'', 
           posts : sourceData,
           maxCharacters: 250,
           charactersLeft: 250,
           newReplyText: false,
           replyingTo: null,
           replyContent: ''
        }
    },
    computed: {

        // suggestionID() {
        //     console.log("THIS ROUTE", this.$route.params.id)
        //     return this.$route.params.id
        // },
        suggestion(){
            console.log("SELECTED SUGGESTION", sourceData.productRequests.find(destination => destination.id == this.id))
            return this.posts.productRequests.find(destination => destination.id == this.id)
        }
      
    },
    methods: {
        addComment(){
            const comment = {
                content: this.newCommentText,
                id : Math.floor(Math.random()),
                user: {
                    "image": "./assets/user-images/image-victoria.jpg",
                    "name": "Victoria Mejia",
                    "username": "arlen_the_marlin"
                },
            }
            this.suggestion.comments.push(comment);
            this.newCommentText = '';
            this.charactersLeft = this.maxCharacters;
        },
        updateCharacterCount() {
            this.charactersLeft = this.maxCharacters - this.newCommentText.length;

            if (this.charactersLeft < 0) {
                this.newCommentText = this.newCommentText.slice(0, this.maxCharacters);
                this.charactersLeft = 0;
            }
        },
        toggleReply(commentId) {
            console.log("TOGGLE REPLY!", commentId)
            this.replyingTo = this.replyingTo === commentId ? null : commentId;
            this.replyContent = ''; // Clear reply content when toggling
        },
        submitReply(commentId) {
     
            const commentedOn = this.suggestion.comments.find(comment => comment.id === commentId);
            if(commentedOn){
                const reply = {
                    content: this.replyContent,
                    replyingTo: commentedOn.user.username,
                     user: {
                        "image": "./assets/user-images/image-ryan.jpg",
                        "name": "Ryan Welles",
                        "username": "voyager.344"
                    }
                }


                if(!commentedOn.replies) {
                    commentedOn.replies = [];
                }

                commentedOn.replies.push(reply);
                this.replyContent =  '';
                console.log(`Replying to ${commentId}: ${this.replyContent}`);
                this.toggleReply(commentId); // Close the reply textarea after submission
            }else {
                console.warn (`Comment with ID ${commentId} not found. `);
            }
            
        }
   
    }
}
</script>
<style lang="scss" scoped>
    .suggestion-container {
        background-color: #fff;
        margin-bottom: 1.5rem;
        padding: 1.75rem 2rem;
        border-radius: 0.625rem;
        .suggestion {
            .title{
            color: #3A4374;
                font-size: 1.125rem;
                font-style: normal;
                font-weight: 700;
                line-height: normal;
                letter-spacing: -0.01563rem; 
            }
            .desc {
                color: #647196;
                font-size: 1rem;
                font-style: normal;
                font-weight: 400;
                line-height: normal;
            }
            .category{
                border-radius: 0.625rem;
                background: #F2F4FF; 
                padding: 0.38rem 1rem;
                color: #4661E6;
                font-size: 0.8125rem;
                font-style: normal;
                font-weight: 600;
                line-height: normal; 
                text-transform: capitalize; 
            }
        }

        .upvotes-container{
            background-color: #F2F4FE;
            border-radius: 0.625rem;
            padding-top: 0.72rem;
            max-width: 2.5rem;
            
            .upvotes{
                color: #3A4374;
                font-size: 0.8125rem;
                font-style: normal;
                font-weight: 700;
                line-height: normal;
                letter-spacing: -0.01131rem;
            }
        }
        .comment{
            .fa-comment{
                color: #CDD2EE;
            }
        }
        .comments-no {
            color: #3A4374;
            text-align: center;
            font-size: 1rem;
            font-style: normal;
            font-weight: 700;
            line-height: normal;
            letter-spacing: -0.01388rem;
        }
       
    }
    .comment-container{
        background-color: #fff;
        margin-bottom: 1.5rem;
        padding: 1.75rem 2rem;
        border-radius: 0.625rem;

        .comment-number{
            color: #3A4374;
            font-size: 1.125rem;
            font-style: normal;
            font-weight: 700;
            line-height: normal;
            letter-spacing: -0.01563rem;

            margin-bottom: 1.75rem;
        }
        .comment {
            border-bottom: 1px solid #ccc;

            &:last-child {
                border-bottom: none;
            }
        }

        .avatar {
            vertical-align: middle;
            width: 50px;
            height: 50px;
            border-radius: 50%;
        }
        .name {
            color: #3A4374;
            font-size: 0.875rem;
            font-style: normal;
            font-weight: 700;
            line-height: normal;
            letter-spacing: -0.01213rem;
            margin-bottom: 0;
        }
        .username {
            color: #647196;
            font-size: 0.875rem;
            font-style: normal;
            font-weight: 400;
            line-height: normal;
        }
    }
    .add-comment-container {
        background-color: #fff;
        margin-bottom: 1.5rem;
        padding: 1.75rem 2rem;
        border-radius: 0.625rem; 

        .add-comment-title{
            color: #3A4374;
            //font-family: Jost;
            font-size: 1.125rem;
            font-style: normal;
            font-weight: 700;
            line-height: normal;
            letter-spacing: -0.01563rem;
            
            margin-bottom: 1.5rem;
        }
        .custom-textarea{
            padding: 1rem 1.5rem;
            border-radius: 0.3125rem;
            background: #F7F8FD;
            border: none;
            resize: none;
        }
        /* In your component's style block or a global stylesheet */
        .visually-hidden {
            position: absolute;
            width: 1px;
            height: 1px;
            margin: -1px;
            padding: 0;
            overflow: hidden;
            clip: rect(0, 0, 0, 0);
            border: 0;
        }
        .form-actions{
            margin-top: 1.5rem;
        }
        .btn {
            border-radius: 0.625rem;
            background: #AD1FEA;

            color: #F2F4FE;
            //font-family: Jost;
            font-size: 0.875rem;
            font-style: normal;
            font-weight: 700;
            line-height: normal;
        }
        .character-count{
            margin-top: 1.5rem;
        }
    }
    .custom-textarea{
        padding: 1rem 1.5rem;
        border-radius: 0.3125rem;
        background: #F7F8FD;
        border: none;
        resize: none;
    }
    .btn {
        border-radius: 0.625rem;
        background: #AD1FEA;

        color: #F2F4FE;
        //font-family: Jost;
        font-size: 0.875rem;
        font-style: normal;
        font-weight: 700;
        line-height: normal;
    }
    
</style>


