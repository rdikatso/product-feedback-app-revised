<template>
  <div class="row">
    <h1>
        Hello SuggestionDetail {{suggestionID}}
    </h1>
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
                            <p class="d-flex justify-content-end align-items-center">Reply</p>
                        </div>
                        <div>
                            <p class="text-start">{{comment.content}}</p>
                        </div>
                    </div>
                </div>
            </div>

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
            
        }
    },
    computed: {

        // suggestionID() {
        //     console.log("THIS ROUTE", this.$route.params.id)
        //     return this.$route.params.id
        // },
        suggestion(){
            console.log("SELECTED SUGGESTION", sourceData.productRequests.find(destination => destination.id == this.id))
            return sourceData.productRequests.find(destination => destination.id == this.id)
        }
      
    },
    methods: {
   
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
    
</style>


