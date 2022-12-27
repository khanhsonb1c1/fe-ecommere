<template>
    <section class="trending-product section" style="margin-top: 12px">
      <div class="container">
        <div class="row">
          <div class="col-12">
            <div class="section-title">
              <h2>{{ title }}</h2>
              <!-- <p>
                There are many variations of passages of Lorem Ipsum available,
                but the majority have suffered alteration in some form.
              </p> -->
            </div>
          </div>
        </div>
        <div class="row">
         <!-- product item -->
         <slot name="item" ></slot>
          <!-- product item -->
        </div>
      </div>
    </section>
  </template>
  
  <script lang="ts">
  import { defineComponent } from "vue";
  
  export default defineComponent({
    props:{
        title:{
            type:String,
            requied: true,
            default: '',
        },

        // list:{
        //     type: Array,
        //     requied: true,
        // },
    }
  });
  </script>
  