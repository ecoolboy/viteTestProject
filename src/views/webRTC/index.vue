<template>
<!--webRTC的尝试-->
  <h1 style="text-align: center">webRTC</h1>
  <el-button type="success" size="small" @click="openCamera">开启摄像头</el-button>
  <el-button type="danger"  size="small" @click="closeCamera">关闭摄像头</el-button>
  <el-button type="primary" size="small" @click="cacheAduio">捕获麦克风声音</el-button>
  <el-button type="primary" size="small" @click="closeAduio">关闭麦克风声音</el-button>
  <video id="camera" style="border: 1px solid darkred;height: 300px;width: 300px"></video>
</template>

<script>
export default {
  name: "index",
  data(){
    return {
      video:null,
      audioStream:null
    }
  },
  mounted() {
    this.video=document.getElementById('camera')
  },
  methods:{
    openCamera(){
      let constraints={video:true}
      if (navigator.getUserMedia) {
        navigator.getUserMedia(constraints,(stream)=>{
          this.video.srcObject = stream;
          this.video.autoplay = true;
        },err=>{
          console.log("navigator.getUserMedia error: ", err);
        })
      }
    },
    closeCamera(){
      this.video.srcObject.getTracks()[0].stop()
    },
    cacheAduio(){
      window.AudioContext=window.AudioContext ||
                          window.webkitAudioContext
      let context=new AudioContext()
      navigator.getUserMedia({audio:true},stream => {
        let aduioInput=context.createMediaStreamSource(stream)
        aduioInput.connect(context.destination)
        this.audioStream=aduioInput
      },err=>{
        console.log(err)
      })
    },
    closeAduio(){
      this.audioStream=null
    }
  }
}
</script>

<style scoped>

</style>