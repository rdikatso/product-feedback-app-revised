<template>
  <div class="row">
    <div class="col-md-3">
        <div class="logo-container d-flex flex-column justify-content-end align-items-start">
            <h1 class="logo"> Front End Mentor</h1>
            <p class="tagline">Feedback Board</p>
        </div>
        <div class="suggestions-categories">
            <!-- <h1>Suggestions Categories</h1>
            <div class="categories" v-for="item in productRequests" :key="item.id">
                <p>{{ item.category}}</p>
            </div>
            <p>From Computed Properties</p> -->
            <!-- <div class="categories col-2" v-for="item in categories" :key="item.index">
                {{item}}
            </div> -->
            <a class="category" v-for="item in categories" :key="item.index" href="/"><span>{{item}}</span></a>
        </div>
        <div class="roadmap-container">
            <div class="roadmap-heading d-flex justify-content-between">
                <p>Roadmap</p>
                <a href="/">View</a>
            </div>
            <div class="roadmap-items d-flex row" v-for="(value, key) in status" :key="key">
                <div class="col-md-2">
                    <svg xmlns="http://www.w3.org/2000/svg" width="8" height="8" viewBox="0 0 8 8" fill="none">
                        <circle cx="4" cy="4" r="4" fill="#F49F85" 
                        :class="[key.toLowerCase() == 'suggestion'  ? 'suggestion-color' : '', 
                        key.toLowerCase() == 'planned'  ? 'planned-color' : '',
                        key.toLowerCase() == 'in-progress'  ? 'in-progress-color' : '',
                        key.toLowerCase() == 'live'  ? 'live-color' : '',]"/>
                    </svg>
                </div>
                <p class="status col-md-8">{{key}}</p>
                <p class="status-count col-md-2">{{value}}</p>
            </div>
            <!-- <div class="roadmap-progress d-flex justify-content-between">
                <p>&#x2022; Planned</p>
                <p>2</p>
            </div>
            <div class="roadmap-progress d-flex justify-content-between">
                <p>&#x2022; In-Progress</p>
                <p>3</p>
            </div>
            <div class="roadmap-progress d-flex justify-content-between">
                <p>&#x2022; Live</p>
                <p>1</p>
            </div> -->
        </div>
    </div>
    <div class="col-md-9">
        <div class="row">
            <div class="add-feedback-container d-flex">
                <div class="col-md-1 d-flex justify-content-center align-items-center">
                    <svg xmlns="http://www.w3.org/2000/svg" width="23" height="24" viewBox="0 0 23 24" fill="none">
                        <g clip-path="url(#clip0_12_3)">
                            <path d="M11.5006 2.27418C13.7374 2.27418 15.8386 3.12773 17.4235 4.68168C19.013 6.24013 19.8884 8.31387 19.8884 10.5209C19.8884 12.3358 19.3002 14.0575 18.1875 15.4998C17.251 16.7138 15.9721 17.6593 14.5363 18.21L14.2263 18.3219L14.2295 19.1478H14.5978C14.8599 19.1478 15.0725 19.3577 15.0725 19.6165C15.0725 19.8466 14.9045 20.038 14.6831 20.0777L14.5978 20.0853H14.233L14.2369 21.1051H14.5978C14.8599 21.1051 15.0725 21.3151 15.0725 21.5739C15.0725 21.804 14.9045 21.9954 14.6831 22.0351L14.5978 22.0426H14.2405L14.2461 23.5295C14.2466 23.6542 14.1968 23.7738 14.1077 23.8621C14.0409 23.9283 13.9561 23.9728 13.8646 23.9909L13.7714 24H9.22857C9.10238 24 8.98132 23.9504 8.89226 23.8621C8.82543 23.7959 8.78071 23.712 8.76272 23.6216L8.75382 23.5295L8.75947 22.0426H8.40218C8.14002 22.0426 7.92743 21.8327 7.92743 21.5739C7.92743 21.3438 8.0954 21.1524 8.31685 21.1127L8.40218 21.1051H8.76303L8.76693 20.0853H8.40218C8.14002 20.0853 7.92743 19.8754 7.92743 19.6165C7.92743 19.3865 8.0954 19.195 8.31685 19.1553L8.40218 19.1478H8.77049L8.77362 18.3219C7.19333 17.7867 5.78461 16.7783 4.77795 15.4548C3.66144 13.9868 3.08553 12.2387 3.11249 10.3994C3.14368 8.27169 4.03535 6.24702 5.62315 4.69827C7.13092 3.22763 9.07058 2.37717 11.1159 2.28278L11.4397 2.27418H11.5006ZM13.291 22.0426H9.70901L9.70517 23.0625H13.2949L13.291 22.0426ZM13.2835 20.0852H9.71642L9.71258 21.1051H13.2874L13.2835 20.0852ZM11.5004 3.21163L11.4463 3.21182C7.50035 3.23915 4.11867 6.53685 4.06189 10.4129C4.01404 13.6777 6.20248 16.6044 9.38391 17.5302C9.55754 17.5807 9.6843 17.7231 9.71646 17.894L9.72444 17.9815L9.71998 19.1477H13.28L13.2756 17.9815C13.2748 17.7731 13.4135 17.5891 13.6161 17.5302C16.7501 16.6182 18.9389 13.7359 18.9389 10.5208C18.9389 8.5655 18.1631 6.72805 16.7544 5.34688C15.3488 3.96871 13.4847 3.21163 11.5004 3.21163ZM12.3288 4.99443C12.5506 4.99443 12.7305 5.17199 12.7305 5.39104V5.7126C13.2099 5.83218 13.662 6.02005 14.0756 6.26511L14.3039 6.03889C14.4609 5.88336 14.716 5.88336 14.873 6.03889L16.0461 7.2012C16.2023 7.35599 16.2023 7.60634 16.0461 7.76113L15.8158 7.98931C16.0631 8.39909 16.2527 8.84703 16.3734 9.32211H16.6965C16.9183 9.32211 17.0982 9.49967 17.0982 9.71872V11.3639C17.0982 11.5829 16.9183 11.7605 16.6965 11.7605H16.3734C16.2527 12.2356 16.0631 12.6835 15.8157 13.0933L16.046 13.3214C16.2022 13.4762 16.2022 13.7266 16.046 13.8813L14.8729 15.0437C14.716 15.1992 14.4609 15.1992 14.3039 15.0437L14.0756 14.8174C13.662 15.0625 13.2099 15.2504 12.7305 15.37V15.6915C12.7305 15.9106 12.5506 16.0881 12.3288 16.0881H10.6711C10.4493 16.0881 10.2695 15.9106 10.2695 15.6915V15.37C9.79001 15.2504 9.3379 15.0625 8.9243 14.8174L8.696 15.0437C8.53905 15.1992 8.28397 15.1992 8.12697 15.0437L6.95387 13.8813C6.79767 13.7266 6.79767 13.4762 6.95387 13.3214L7.18417 13.0933C6.93682 12.6835 6.74721 12.2356 6.62653 11.7605H6.30341C6.08156 11.7605 5.90173 11.5829 5.90173 11.3639V9.71872C5.90173 9.49967 6.08156 9.32211 6.30341 9.32211H6.62653C6.74721 8.84703 6.93682 8.39909 7.18417 7.98931L6.95387 7.76113C6.79767 7.60634 6.79767 7.35599 6.95387 7.2012L8.12697 6.03889C8.28392 5.88336 8.539 5.88336 8.696 6.03889L8.9243 6.26511C9.33786 6.02005 9.78996 5.83218 10.2695 5.7126V5.39104C10.2695 5.17199 10.4493 4.99443 10.6711 4.99443H12.3288ZM11.5 7.72128C9.92811 7.72128 8.65384 8.98386 8.65384 10.5413C8.65384 12.0988 9.92811 13.3614 11.5 13.3614C13.0719 13.3614 14.3462 12.0988 14.3462 10.5413C14.3462 8.98386 13.0719 7.72128 11.5 7.72128ZM22.5253 11.8732C22.7875 11.8732 23 12.0831 23 12.342C23 12.5721 22.832 12.7635 22.6106 12.8032L22.5253 12.8107H22.0269C21.7648 12.8107 21.5522 12.6008 21.5522 12.342C21.5522 12.1119 21.7201 11.9205 21.9416 11.8808L22.0269 11.8732H22.5253ZM0.97309 11.8732C1.23525 11.8732 1.44784 12.0831 1.44784 12.342C1.44784 12.5721 1.27986 12.7635 1.05842 12.8032L0.97309 12.8107H0.474748C0.212592 12.8107 0 12.6008 0 12.342C0 12.1119 0.167974 11.9205 0.389422 11.8808L0.474748 11.8732H0.97309ZM3.11161 3.44944L3.18622 3.50934L3.64521 3.96046C3.83102 4.14313 3.83169 4.4399 3.64673 4.62337C3.55396 4.71538 3.43214 4.76141 3.31027 4.76141C3.21941 4.76141 3.12854 4.73581 3.04971 4.68461L2.97534 4.62487L2.51635 4.17374C2.33054 3.99107 2.32987 3.69431 2.51483 3.51084C2.67672 3.35026 2.92707 3.32972 3.11161 3.44944ZM20.4852 3.51084C20.647 3.67137 20.6667 3.91869 20.5447 4.10035L20.4836 4.17374L20.0247 4.62487C19.932 4.7159 19.8109 4.76141 19.6897 4.76141C19.5679 4.76141 19.446 4.71538 19.3533 4.62337C19.1914 4.46283 19.1717 4.21555 19.2938 4.03387L19.3548 3.96046L19.8138 3.50934C19.9996 3.32671 20.3002 3.32742 20.4852 3.51084ZM11.5 0C11.733 0 11.9269 0.165814 11.9671 0.384489L11.9747 0.468749V0.958545C11.9747 1.21744 11.7622 1.42729 11.5 1.42729C11.2669 1.42729 11.0731 1.26148 11.0329 1.04281L11.0253 0.958545V0.468749C11.0253 0.209859 11.2378 0 11.5 0Z" fill="white"/>
                        </g>
                        <defs>
                            <clipPath id="clip0_12_3">
                            <rect width="23" height="24" fill="white"/>
                            </clipPath>
                        </defs>
                    </svg>
                </div>
            
                <div class="col-md-2 d-flex justify-content-start align-items-center">
                    {{ productRequests.length}} <span>&nbsp;Suggestions</span>
                </div>
                <div class="col-md-6 d-flex justify-content-start align-items-center">
                    <span>Sort by: </span>
                    <div class="custom-select">
                        <select v-model="selected">
                            <option class="option" v-for="(option, index) in sortOptions" :key="index" :value="option">
                                {{ option }}
                            </option>
                        </select>
                    </div>
                  
                </div>
                <div class="col-md-3 d-flex justify-content-end align-items-center">
                    <button class="default-btn">+ Add Feedback</button>
                </div>
                
            </div>
        </div>
        <div class="row">
            <router-link class="suggestion-container d-flex justify-content-center align-items-center" v-for="(request, index) in sortedProductRequests" :key="index" :to="{name: 'SuggestionDetail', params: {id:request.id}}">
                <div class="upvotes-container col-md-1">
                    <i class="fa-solid fa-chevron-up"></i>
                    <p class="upvotes">{{request.upvotes}}</p>
                </div>
                <div class="col-md-1"></div>
                <div class="suggestion col-md-8 d-flex flex-column justify-content-start align-items-start">
                    <h4 class="title">{{ request.title}}</h4>
                    <p class="desc"> {{request.description}}</p>
                    <p class="category">{{request.category}}</p>
                </div>
                <div class="comment col-md-2">
                    <i class="fa-solid fa-comment"></i>
                    <span class="comments-no" v-if="request.comments">&nbsp;{{request.comments.length}}</span>
                    <span class="comments-no" v-else-if="request.comments == null">&nbsp;0</span>
                </div>
            </router-link>
        </div>
        <!-- <div> {{productRequests}}</div> -->
    </div>
  </div>
</template>

<script>
import sourceData from '@/data.json'
console.log ("SourceData", sourceData)
export default {
    name: 'SuggestionsComponent',
    data (){
        return {
            productRequests: sourceData.productRequests,
            sortOptions: ['Most Upvotes', 'Least Upvotes', 'Most Comments', 'Least Comments'],
            selected: 'Most Upvotes'
        }
    },
    computed: {
        categories (){
            // let categories = []
            // console.log("caterory list at beginning",categories)

            // let filteredCategories = this.productRequests.map (function (item) {
            //     console.log(item)
            //    categories.push(item.category)
            // })
           
            // console.log("categories after filtering", filteredCategories)

            let categories = this.productRequests.map((item) => {
                return item.category
            })
            console.log("categories after mapping", categories)

            let uniqueCategories = categories.filter((item,index) => {
                return categories.indexOf(item) === index
            })

            uniqueCategories.sort();
            uniqueCategories.unshift('All');
            console.log("categories after filtering", uniqueCategories)
            return uniqueCategories
        },
        status(){

            //The solution below works. But its an array of arrays which I dont know how to iterate over yet.
         
            // const statusArray = this.productRequests.map((item) => {
            //     return item.status
            // })
            // console.log(statusArray)
            // let uniqueStatus = [...new Set(statusArray)];
            // console.log("UNIQUE STATUS", uniqueStatus)
            // const elementCounts = uniqueStatus.map(value => [value, statusArray.filter(str => str === value).length]);
            // console.log(elementCounts);
            // return elementCounts

            const statusArray = this.productRequests.map((item) => {
                return item.status
            })
            const statusCounts = {};
            statusArray.forEach(status => {
                statusCounts[status] = (statusCounts[status] || 0) + 1;
            })
            console.log("STATUS COUNTS", statusCounts)

            return statusCounts
        },
        sortedProductRequests(){
            //Check what sorting property is used

            let sortingMethod = this.selected

            console.log("SORTING METHOD", sortingMethod)
            //Initially sort the requests by most upvotes
            let sortedProductRequests = this.productRequests

            if(sortingMethod == 'Most Upvotes'){
                sortedProductRequests = sortedProductRequests.sort ((a,b) => {
                    return b.upvotes - a.upvotes
                })
            }else if (sortingMethod == 'Least Upvotes'){
                sortedProductRequests = sortedProductRequests.sort ((a,b) => {
                    return a.upvotes - b.upvotes
                })
            }else if (sortingMethod == 'Most Comments'){
                //map through the list of product request
                //if comments are not available, give the comment and empty array

                sortedProductRequests = sortedProductRequests.sort ((a,b) => {
                 
                 const commentsLengthA = (a.comments || []).length; // Default to 0 if key doesn't exist
                 const commentsLengthB = (b.comments || []).length;
                
                 // Compare based on the length of comments
                 return commentsLengthB - commentsLengthA; // Sort in descending order
                })
            }else if(sortingMethod == 'Least Comments'){
                //map through the list of product request
                //if comments are not available, give the comment and empty array

                sortedProductRequests = sortedProductRequests.sort ((a,b) => {
                 
                 const commentsLengthA = (a.comments || []).length; // Default to 0 if key doesn't exist
                 const commentsLengthB = (b.comments || []).length;
                
                 // Compare based on the length of comments
                 return commentsLengthA - commentsLengthB; // Sort in ascending order
                })
            }

          

            return sortedProductRequests
        }
    },
    methods: {
        select(option){
            console.log("SELECTED OPTION IS", option)
            // let sortedProductRequests = this.productRequests
            if(option == 'Least Comments'){
                this.productRequests = this.productRequests.sort((a,b) => {
                    return a.upvotes - b.upvotes
                })
            }
            if(option == 'Most Comments'){
                this.productRequests = this.productRequests.sort((a,b) => {
                    return b.upvotes - a.upvotes
                })
            }
             if(option == 'Most Upvotes'){
                this.productRequests = this.productRequests.sort((a,b) => {
                   return (a.comments.length === undefined ||  a.comments.length === null) - (b.comments.length === undefined || b.comments.length === null) || a.comments.length - b.comments.length
                })
            }

            console.log("SORTED PROPDUCT REQUESTS", this.productRequests)


        }
    }
}
</script>

<style lang="scss" scoped>
.logo-container {
    background-image : url('data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" width="255" height="137" viewBox="0 0 255 137" fill="none"><rect width="255" height="137" rx="10" fill="url(%23paint0_radial_0_2333)"/><mask id="mask0_0_2333" style="mask-type:luminance" maskUnits="userSpaceOnUse" x="0" y="0" width="255" height="137"><rect width="255" height="137" rx="10" fill="white"/></mask><g mask="url(%23mask0_0_2333)"><g opacity="0.765433" filter="url(%23filter0_f_0_2333)"><circle cx="-0.5" cy="-40.5" r="96" fill="%237AD8FB"/></g><g filter="url(%23filter1_f_0_2333)"><circle cx="304.5" cy="137.5" r="96" fill="%23FBB57A"/></g></g><defs><filter id="filter0_f_0_2333" x="-186.203" y="-226.203" width="371.407" height="371.407" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB"><feFlood flood-opacity="0" result="BackgroundImageFix"/><feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape"/><feGaussianBlur stdDeviation="44.8517" result="effect1_foregroundBlur_0_2333"/></filter><filter id="filter1_f_0_2333" x="118.797" y="-48.2033" width="371.407" height="371.407" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB"><feFlood flood-opacity="0" result="BackgroundImageFix"/><feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape"/><feGaussianBlur stdDeviation="44.8517" result="effect1_foregroundBlur_0_2333"/></filter><radialGradient id="paint0_radial_0_2333" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(264.945 -14.2296) rotate(146.823) scale(322.666 301.288)"><stop stop-color="%23E84D70"/><stop offset="0.530886" stop-color="%23A337F6"/><stop offset="1" stop-color="%2328A7ED"/></radialGradient></defs></svg>');
    background-repeat:no-repeat;
    background-size: cover;
    border-radius: 0.625rem;
    min-height: 8.5625rem;
    padding: 15px;
    .logo {
        font-size: 1.25rem;
        font-style: normal;
        font-weight: 700;
        line-height: normal;
        letter-spacing: -0.01563rem;
        color: #fff;
    }
    .tagline {
        color: #FFF;
        font-size: 0.9375rem;
        font-style: normal;
        font-weight: 500;
        line-height: normal;
        opacity: 0.75;
    }
}
.suggestions-categories {
    height: 10.375rem;
    padding: 15px; 
    margin-top: 20px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    flex-wrap: wrap;
    border-radius: 0.625rem;
    background: #FFF;  
    flex-shrink: 0; 

    a {
        text-decoration: none;
        border-radius: 5px;
        // margin-right: 25px;
        height: 1.875rem;
        border-radius: 0.625rem;
        background: #F2F4FF;
        display: flex;

        font-size: 0.8125rem;
        font-style: normal;
        font-weight: 600;
        line-height: normal;

        span {
            padding: 0.31rem 1rem 0.38rem 1rem;
            font-size: 0.8125rem;
        }
    }
}
.add-feedback-container{
    background-color: #373F68;
    color: #fff;
    padding: 1.25rem 1rem;
    border-radius: 0.625rem;
    margin-bottom: 2.56rem;
    position: relative;

    .custom-select {
        width: 200px;
        background-color: #f2f2f2;
        border: 1px solid #ccc;
        border-radius: 5px;
        font-family: Arial, sans-serif;
        color: #333;

        select {
            width: 100%;
            height: 100%;
            border: none;
        }
        
    }

}
.default-btn {
    border-radius: 0.625rem;
    background: #AD1FEA;
    color: #fff;
    max-width: 9.875rem;
    padding: 0.6rem 0.72rem;
    border: none;
}
.suggestion-container {
    background-color: #fff;
    margin-bottom: 1.5rem;
    padding: 1.75rem 2rem;
    border-radius: 0.625rem;
    text-decoration: none; /* Removes underline */
    color: inherit; /* Inherits color from parent element */
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
.roadmap-container {
    margin-top: 20px;
    padding: 1.5rem;
    border-radius: 0.625rem;
    min-height: 10.375rem;
    background: #FFFFFF;
    .roadmap-heading {
        margin-bottom: 1.5rem;
        font-style: normal;
        line-height: normal;
        p {
            color: #3A4374;
            font-size: 1.125rem;
            font-weight: 700;
            letter-spacing: -0.01563rem;
        }
        a{
            color: #4661E6;
            font-size: 0.8125rem;
            font-weight: 600;
            text-decoration-line: underline;
        }
    }

    .roadmap-items {
        color: #647196;
        font-size: 1rem;
        font-weight: 400;
        .status {
            text-transform: capitalize;
            color: #647196;
            font-size: 1rem;
            font-weight: 400;
            text-align: left;
        }
        .status-count {
            color: #647196;
            text-align: right;
            font-size: 1rem;
            font-weight: 700;
        }
        .suggestion-color{
            fill: #5FA052;
        }
        .planned-color{
            fill: #F49F85;
        }
        .in-progress-color{
            fill: #AD1FEA;
        }
        .live-color{
           fill: #62BCFA;
        }
    }
    
}
</style>