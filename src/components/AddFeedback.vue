<template>
  <div class="row">
    <div class="row feedback-container">
        <h2 class="title">Create New Feedback</h2>
        <form @submit.prevent="addFeedback">
        <div class="mb-5">
            <label for="title" class="form-label d-flex">Feedback Title</label>
            <p class="input-description d-flex">Add a short, descriptive headline</p>
            <input type="text" id="title" v-model="feedback.title" class="form-control" required>
        </div>

        <div class="select-wrapper">
        <div class="mb-5">
            <label for="category" class="form-label d-flex">Category</label>
            <p class="input-description d-flex">Choose a category for your feedback</p>
            <select id="category" v-model="feedback.category" class="form-select" required>
            <option value="Feature">Feature</option>
            <option value="UI">UI</option>
            <option value="UX">UX</option>
            <option value="Enhancement">Enhancement</option>
            <option value="Bug">Bug</option>
            </select>
        </div>
        </div>
        <div>V-SELECT HERE</div>
        <!-- <v-select :options="categories" label="value"></v-select> -->
        <div class="mb-3">
            <label for="category" class="form-label">Category</label>
            <v-select
            v-model="feedback.category"
            :options="categoryOptions"
            placeholder="Select a category"
            label="name"
            :reduce="category => category.value"
            required
            ></v-select>
        </div>
        <div class="mb-5">
            <label for="details" class="form-label d-flex">Feedback Details</label>
            <p class="input-description d-flex">Include any specific comments on what should be improved, added, etc.</p>
            <textarea id="details" v-model="feedback.details" class="form-control" rows="4" required></textarea>
        </div>

        <div class="mb-5">
            <button type="button" class="btn btn-secondary" @click="cancel">Cancel</button>
            <button type="submit" class="btn btn-primary">Add Feedback</button>
        </div>
        </form>
    </div>
  </div>
</template>

<script>
import vSelect from 'vue-select';
import 'vue-select/dist/vue-select.css';

export default {
  components: {
    vSelect,
   },
  data() {
    return {
      feedback: {
        title: '',
        category: null,
        details: '',
      },
       categoryOptions: [
        { value: 'Feature', name: 'Feature' },
        { value: 'UI', name: 'UI' },
        { value: 'UX', name: 'UX' },
        { value: 'Enhancement', name: 'Enhancement' },
        { value: 'Bug', name: 'Bug' },
      ],
    };
  },
  methods: {
    addFeedback() {
      // You can handle the submission logic here
      console.log('Adding feedback:', this.feedback);

      // Clear the form after submission
      this.feedback = {
        title: '',
        category: 'Feature',
        details: ''
      };

      // You may also want to emit an event or make an API call to save the feedback
    },
    cancel() {
      // You can handle the cancel logic here
      console.log('Cancelled');
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

    }
</style>