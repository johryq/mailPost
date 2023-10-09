<template>
  <div class="mail-box flex flex-col w-full">
    <div class="w-full border-b-1 mb-3 text-center">
      <!-- 邮件标题 -->
      <input type="text" placeholder='title' class="text-line-none w-4/5 text-center text-[#999]" v-model="email.mailTitle" />
      <hr />
    </div>
    <!-- 邮件内容 -->
    <ClientOnly fallback-tag="div" fallback="Loading editor...">
      <QuillEditor  content-type="html" v-model:content="email.text" theme="snow" toolbar="minimal" />
    </ClientOnly>
    <div class="mt-3 flex flex-row items-center">
      <!-- 投递时间 -->
      <div class="send-time flex-1 flex flex-row items-center">
        <label class="whitespace-nowrap">投递日期：</label>
        <VueDate @dateTimeChange="getDateTime" placeholder="请选择日期时间" />
      </div>
      <!-- 收件人地址 -->
      <div class="revice-email flex-1">
        <label>收件人：</label>
        <input class="text-line-none" type="text" placeholder="是那个大聪明要送信啊" v-model="email.sendTo" />
      </div>
      <!-- 写信人地址 -->
      <div class="your-email flex-1">
        <label for="">发信人：</label>
        <input class="text-line-none" type="text" placeholder="给那个小可爱啊" v-model="email.receiver" />
      </div>
    </div>
    <div class="mx-[auto] h-10" @click="sendMail">
      <button>send</button>
    </div>
  </div>
</template>

<script setup lang="ts">
// 编辑器
import { QuillEditor } from '@vueup/vue-quill';
import '@vueup/vue-quill/dist/vue-quill.snow.css';
// 日期时间组件
import VueDate from '@/components/webLib/VueDate.vue';
import type { Email, EmailRef } from '@/types/Email';


// email使用 reactive 双向数据绑定
const email: Email = reactive({
  mailTitle: '',
  sendTo: '',
  sendTime: '',
  receiver: '',
  text: '你想发送什么',
});

const getDateTime = (dt) => {
  email.sendTime = dt
}

const sendMail = () => {
  console.log(JSON.parse(JSON.stringify(email)));
};
</script>

<style lang="scss" scoped>
.text-line-none {
  outline: none;
  border: 0;
  border-bottom: 1px solid #999;
}
.revice-email,
your-email {
  padding-left: 1rem;
}
button {
  background-color: #4caf50; /* Green */
  border: none;
  height: 2.5rem;
  color: white;
  padding: 2px 32px;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  font-size: 1.1rem;
}
</style>
