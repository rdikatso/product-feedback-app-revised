<template>
  <div class="row">
    <div class="row feedback-container">
        <h2 class="title">Create New Feedback</h2>
        <form @submit.prevent="addFeedback">
        <div class="mb-5" :class="{ error: v$.feedback.title.$errors.length }">
            <label for="title" class="form-label d-flex">Feedback Title</label>
            <p class="input-description d-flex">Add a short, descriptive headline</p>
            <input type="text" id="title" v-model="v$.feedback.title.$model" class="form-control" :class="{ error: v$.feedback.title.$errors.length }">
            <!-- error message -->
            <div class="input-errors" v-for="(error, index) of v$.feedback.title.$errors" :key="index">
              <div class="d-flex error-msg">{{ error.$message }}</div>
            </div>
        </div>
        <div class="mb-5" :class="{ error: v$.feedback.category.$errors.length }">
            <label for="category" class="form-label d-flex">Category</label>
            <p class="input-description d-flex">Choose a category for your feedback</p>
            <v-select
            v-model="v$.feedback.category.$model"
            :options="categoryOptions"
            :reduce="category => category.value"
            :label="'name'"
            class="new-styles"
            >
              <template #option="option">
                <div class="d-flex justify-content-between">
                  <span>{{ option.name }}</span>
                  <span v-if="feedback.category && feedback.category === option.name"><svg xmlns="http://www.w3.org/2000/svg" width="13" height="10" viewBox="0 0 13 10" fill="none">
                      <path d="M0.968262 4.85894L4.49995 8.39062L11.9999 0.890625" stroke="#AD1FEA" stroke-width="2"/>
                  </svg></span>
                </div>
              </template>
            </v-select>
            <div class="input-errors" v-for="(error, index) of v$.feedback.category.$errors" :key="index">
              <div class="d-flex error-msg">{{ error.$message }}</div>
            </div>
        </div>
        <div class="mb-5" :class="{ error: v$.feedback.details.$errors.length }">
            <label for="details" class="form-label d-flex">Feedback Details</label>
            <p class="input-description d-flex">Include any specific comments on what should be improved, added, etc.</p>
            <textarea id="details" v-model="v$.feedback.details.$model" class="form-control custom-textarea" rows="4" :class="{ error: v$.feedback.details.$errors.length }"></textarea>
             <div class="input-errors" v-for="(error, index) of v$.feedback.details.$errors" :key="index">
              <div class="d-flex error-msg">{{ error.$message }}</div>
            </div>
        </div>

        <div class="mb-5 d-flex justify-content-end">
            <button type="button" class="default-btn btn btn-secondary cancel-btn" @click="cancel">Cancel</button>
            <button type="submit" class="default-btn btn btn-primary add-btn">Add Feedback</button>
        </div>
        </form>
    </div>
  </div>
</template>

<script>
import useVuelidate from '@vuelidate/core'
import { required, helpers } from '@vuelidate/validators'
import sourceData from '@/data.json'
import vSelect from 'vue-select';
import 'vue-select/dist/vue-select.css';


export default {
  components: {
    vSelect,
   },
  setup () {
    return { v$: useVuelidate() }
  },
  data() {
    return {
      feedback: {
        title: '',
        category: 'Feature',
        details: '',
      },
       categoryOptions: [
        { value: 'Feature', name: 'Feature' },
        { value: 'UI', name: 'UI' },
        { value: 'UX', name: 'UX' },
        { value: 'Enhancement', name: 'Enhancement' },
        { value: 'Bug', name: 'Bug' },
      ],
      productRequests: sourceData.productRequests,
    };
  },
  validations(){
    return {
       feedback: {
        title: { required: helpers.withMessage("Can't be empty", required) },
        category: { required: helpers.withMessage("Can't be empty", required) },
        details: { required: helpers.withMessage("Can't be empty", required)},
      },
    }
  },
  methods: {
    // addFeedback() {
    //   this.v$.$validate()
    //     const newFeedback = {
    //     id: this.productRequests.length + 1, // Generate a unique ID (you may need a more robust approach)
    //     title: this.feedback.title,
    //     category: this.feedback.category,
    //     upvotes: 0, // You may set other default values as needed
    //     status: 'suggestion',
    //     description: this.feedback.details,
    //     comments: [],
    //   };

    //   console.log("New Feedback", newFeedback)

    //   // Push the new feedback to the array
    //   this.productRequests.push(newFeedback);

    //   //this.$router.push({ name: 'SuggestionsComponent' });

    //   // Clear the form after submission
    //   this.feedback = {
    //     title: '',
    //     category: 'Feature',
    //     details: ''
    //   };
    // },
    async addFeedback(){
      const isFormCorrect = await this.v$.$validate()
      console.log(this.v$)
      if(!isFormCorrect){
        return
      }else {
        const newFeedback = {
        id: this.productRequests.length + 1, // Generate a unique ID (you may need a more robust approach)
        title: this.feedback.title,
        category: this.feedback.category,
        upvotes: 0, // You may set other default values as needed
        status: 'suggestion',
        description: this.feedback.details,
        comments: [],
      };

      console.log("New Feedback", newFeedback)

      // Push the new feedback to the array
      this.productRequests.push(newFeedback);

      this.$router.push({ name: 'SuggestionsComponent' });

      // Clear the form after submission
      this.feedback = {
        title: '',
        category: 'Feature',
        details: ''
      };
      }
    },
    cancel() {
      // You can handle the cancel logic here
      console.log('Cancelled');
      this.$router.go(-1);
    }
  }
};
</script>

<style lang="scss" scoped>
    .feedback-container {
      background-color: #fff;
      margin-bottom: 1.5rem;
      padding: 1.75rem 2rem;
      border-radius: 0.625rem;
        
      .title {
        color: #3A4374;
        font-size: 1.5rem;
        font-style: normal;
        font-weight: 700;
        line-height: normal;
        letter-spacing: -0.02081rem;

        margin-bottom: 2.5rem;
        display: flex;
      }
      .form-label{
        color: #3A4374;
        font-size: 0.875rem;
        font-style: normal;
        font-weight: 700;
        line-height: normal;
        letter-spacing: -0.01213rem;
      }
      .input-description {
        color: #647196;
        font-size: 0.875rem;
        font-style: normal;
        font-weight: 400;
        line-height: normal;
      }
      input {
        border-radius: 0.3125rem;
        background: #F7F8FD;
        border: none;
        height: 3rem;
      }
      .select-wrapper {
        position: relative;
      }
      .select-wrapper select {
          appearance: none; /* Disable default styles on some browsers */
          -webkit-appearance: none; /* For older versions of Chrome and Safari */
          -moz-appearance: none; /* For older versions of Firefox */
          padding: 10px; /* Adjust as needed */
          border-radius: 0.3125rem;
          background: #F7F8FD;
          border: 1px solid #F7F8FD; /* Add a border for a complete look */
          border-radius: 5px; /* Optional: Add rounded corners */
          cursor: pointer; /* Show a pointer cursor when hovering over the select */
      }
      /* Style the dropdown arrow */
      .select-wrapper::after {
          content: '\25BC'; /* Unicode character for a downward-pointing triangle */
          position: absolute;
          top: 90%;
          right: 20px; /* Adjust as needed */
          transform: translateY(-90%);
          pointer-events: none; /* Ensure that the arrow doesn't interfere with clicks on the select */
      }
      /* Style the dropdown menu */
      .select-wrapper select option {
          background-color: #fff;
          border-bottom: 1px solid #ddd;
          padding: 10px;
      }
     .vs__dropdown-toggle {
      background: red !important;
     }
      .custom-textarea{
        padding: 1rem 1.5rem;
        border-radius: 0.3125rem;
        background: #F7F8FD;
        border: none;
        resize: none;
      }
      .cancel-btn{
        margin-right: 25px;
        border: none;
        border-radius: 0.625rem;
        background: #3A4374;
        width: 5.8125rem;
        height: 2.75rem;
        flex-shrink: 0;
      }
      .add-btn{
        margin-right: 25px;
        border-radius: 0.625rem;
        border: none;
        background: #AD1FEA;
        width: 9rem;
        height: 2.75rem;
        flex-shrink: 0;
      }
      input.error,
      textarea.error {
        border: 1px solid red;
      }
      .error-msg {
        color: red;
      }
    }
</style>