<template>
  <div class="container">
    <div class="cursor" :style="{ left: mouseX + 'px', top: mouseY + 'px' }"></div>
    <div class="header">
      <div class="title">Radya</div>
      <button class="next-btn">Next <i class="fa-solid fa-arrow-right"></i></button>
    </div>
    <div class="wrapper">
      <div class="element-top">
        <div class="line line-one"></div>
        <div class="line line-two"></div>
        <div class="line line-three"></div>
      </div>
      <div class="content">
        <div class="card">
          <div class="card1">
            <img style="object-fit:cover; width: 100%;
            height: 100%;"
              src="data:image/png;base64,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"
              alt="Foto">
          </div>
        </div>
        <div class="name">
          <p>Hi! My name is</p>
          <div class="name1">RADYA</div>
          <p>Back-end Dev</p>
        </div>
      </div>
      <div class="element-bottom">
        <div class="line line-one"></div>
        <div class="line line-two"></div>
        <div class="line line-three"></div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      mouseX: 0,
      mouseY: 0,
    }
  },
  mounted() {
    document.addEventListener("mousemove", this.updateMousePosition);
  },
  beforeUnmount() {
    document.removeEventListener("mousemove", this.updateMousePosition)
  },
  methods: {
    updateMousePosition(event) {
      setTimeout(() => {
        this.mouseX = event.clientX
        this.mouseY = event.clientY
      }, 90)
    }
  }
}
</script>

<style scoped>
@media only screen and (max-width: 551px) {
  .card {
    display: none !important;
  }

  .content {
    justify-content: center !important;
    width: 100% !important;
  }

  .name {
    display: flex;
    justify-content: start;
    align-items: center;
    flex-direction: column;
    width: 100% !important;
  }

  .name1 {
    font-size: 4rem !important;
  }
}

.cursor {
  position: fixed;
  width: 40px;
  height: 40px;
  background-color: white;
  border-radius: 50%;
  pointer-events: none;
  z-index: 9999;
  transition: transform 999s ease;
}

.container {
  background-color: black;
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  /* cursor: url('../assets/cursor.png'), auto; */
  cursor: none;
}

.header {
  color: white;
  margin-bottom: 10px;
  display: flex;
  justify-content: space-between;
  width: 90vw;

}

.title {
  font-size: 2rem;
  font-weight: bolder;
}

.next-btn {
  font-size: 1.2rem;
  font-weight: bolder;
  padding: 1px 15px;
  border: none;
  border-radius: 10px;
  /* cursor: pointer; */
  cursor: none;
}

.wrapper {
  /* border: 5px solid white; */
  width: 100vw;
  height: 85vh;
}

.element-top {
  /* border: 1px solid red; */
  width: 100vw;
  height: 17vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: start;
}

.element-top .line {
  background-color: white;
  height: 5px;
  margin-top: 10px;
  border-radius: 0 10px 10px 0;
}

.element-top .line-one {
  width: 10vw;
}

.element-top .line-two {
  width: 30vw;
}

.element-top .line-three {
  width: 20vw;
}

.content {
  /* border: 1px solid yellow; */
  width: 90vw;
  height: 50vh;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
}

.card {
  /* border: 1px solid red; */
  width: 20vw;
  height: 40vh;
  display: flex;
  justify-content: center;
  align-items: center;
}

.card1 {
  width: 80%;
  height: 100%;
  background: #fff;
  border: 3px solid #000;
  border-radius: 0;
  box-shadow: 15px 15px 0 -2.5px #fff, 15px 15px 0 0 #000;
}

.name {
  /* border: 1px solid red; */
  width: 20vw;
  height: 40vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
}

.name1 {
  color: white;
  font-size: 6rem;
  font-weight: bolder;
  padding: -10 0;
  /* border: 1px solid yellow; */
}

p {
  color: #8C8C8C;
}

.element-bottom {
  /* border: 1px solid red; */
  width: 100vw;
  height: 17vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: end;
}

.element-bottom .line {
  background-color: white;
  height: 5px;
  margin-top: 10px;
  border-radius: 10px 0 0 10px;
}

.element-bottom .line-one {
  width: 30vw;
}

.element-bottom .line-two {
  width: 40vw;
}

.element-bottom .line-three {
  width: 20vw;
}
</style>