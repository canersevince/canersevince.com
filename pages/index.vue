<template>
  <section>
    <div class="toolbar">
      <div id="header">
        <span :class="{ fxOn : fxOn.red }" @mouseout="fxOn.red = false" @mouseover="fxOn.red = true" id="red"></span>
        <span :class="{ fxOn : fxOn.yellow }" @mouseout="fxOn.yellow = false" @mouseover="fxOn.yellow = true"
              id="yellow"></span>
        <span :class="{ fxOn : fxOn.green}" @mouseout="fxOn.green = false" @mouseover="fxOn.green = true"
              id="green"></span>
      </div>
      <div class="messages">
        <transition-group mode="out-in" name="fade">
          <p :class="{'cursor-pointer' : msg.indexOf('e-mail') > -1}" :key="msg"
             @click="msg.indexOf('e-mail') > -1 ? email() : {}" v-for="msg in texts">{{msg}}</p>
        </transition-group>
      </div>
      <div :data-x="Math.ceil(Math.random()*170)+150" class="bubbles" v-for="bubble in bubbles"><img
        :src="'images/'+bubble.icon+'.png'" alt=""></div>
      <div style="width: 100%" v-if="!animationFinish">
        <div id="type"></div>
      </div>
    </div>
    <div class="wrapper">
      <Footer></Footer>
    </div>
  </section>
</template>

<script>
  import anime from 'animejs'
  import $ from 'jquery'
  import typed from 'typed.js'
  import Footer from '../components/footer/index'

  var fx;
  export default {
    components: {
      Footer
    },
    data() {
      return {
        animationFinish: false,
        fxOn: {
          green: false,
          yellow: false,
          red: false
        },
        texts: [],
        strings: [
          "Hello there.", "My name is Caner Sevince.", "I'm a full stack javascript developer.", "I mostly do spfx webparts and interactive web applications nowadays.",
          "I use Angular, Vue & Nuxt, Node.js and various other tools", "You can e-mail me for your projects or offers."
        ],
        bubbles: [
          {
            name: "Javascript",
            icon: "js"
          },
          {
            name: "Typescript",
            icon: "typescript"
          },
          {
            name: "Angular",
            icon: "angular"
          },
          {
            name: "Vue",
            icon: "vue"
          },
          {
            name: "Node.js",
            icon: "node-js"
          },
          {
            name: "Sass",
            icon: "sass"
          }
        ]
      }
    },
    methods: {
      email() {
        location.href = "mailto:canersevince@gmail.com"
      },
      textPush(e) {
        this.texts.push(e)
      }
    },
    created() {
      if (process.client) {
        var self = this;
        $(document).ready(function () {
          anime({
            targets: 'section',
            opacity: 1,
            duration: 1000,
            delay: '200ms'
          });
          anime({
            targets: '.bubbles',
            translateX: function (el) {
              return el.getAttribute('data-x') - 20;
            },
            translateY: function (el, i) {
              return 50 + (-70 * i);
            },
            scale: function (el, i, l) {
              if (i == l - 1) {
                return 2
              }
              return (l - i) + .75;
            },
            rotate: function () {
              return anime.random(-50, 50);
            },
            borderRadius: function () {
              return ['50%', anime.random(10, 35) + '%'];
            },
            duration: function () {
              return anime.random(1200, 1800);
            },
            delay: function () {
              return anime.random(0, 400);
            },
            direction: 'alternate',
            loop: false
          });
          setTimeout(() => {
            anime({
              targets: '.bubbles',
              translateX: function (el) {
                return el.getAttribute('data-x') - Math.ceil(Math.random() * 5);
              },
              direction: 'alternate',
              loop: true
            });

            fx = new typed('#type', {
              showCursor: false,
              strings: [...self.strings],
              typeSpeed: 50,
              onStringTyped: (arrayPos, s) => {
                self.textPush(self.strings[arrayPos])
                console.log(arrayPos)
                console.log(self.strings.length)
                setTimeout(() => {
                  if (arrayPos == self.strings.length - 1) {
                    self.animationFinish = true
                  }
                }, 1000)
              }
            });
          }, 1000)
        })
      }
    }
  }
</script>

<style lang="scss">
  @import url('https://fonts.googleapis.com/css2?family=Lato:wght@100;400;700&display=swap');

  section {
    transition: 300ms;
    opacity: 0;
  }

  html {
    max-height: 100vh;
    overflow: hidden;
  }

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  .wrapper {
    display: flex;
    align-items: center;
    justify-content: center;
    position: absolute;
    bottom: 0;
    left: 0;
    background: #333;
  }

  section {
    position: relative;
    background: #fff;
    display: flex;
    align-items: center;
    justify-content: center;
    min-height: 100vh;
    min-width: 100vw;
    flex-direction: column;
  }

  .toolbar {
    border-radius: 6px;
    height: 400px;
    width: 425px;
    background: #c0c0c0;
    display: flex;
    box-shadow: 0 6px 12px rgba(0, 0, 0, 0.3);
    position: relative;
    align-items: center;
    justify-content: space-between;
    flex-direction: column;
    padding: 10px 15px;

    #header {
      border-radius: 6px 6px 0 0;
      position: absolute;
      height: 40px;
      background: #7f828b;
      width: 100%;
      top: 0;
      left: 0;
      display: flex;
      align-items: center;
      justify-content: flex-start;
      padding-left: 15px;

      span.fxOn {
        &:after {
          transition: 200ms ease-in-out;
          -webkit-animation: glow 1s ease-in-out infinite alternate;
          -moz-animation: glow 1s ease-in-out infinite alternate;
          animation: glow 1s ease-in-out infinite alternate;
        }
      }

      span {
        transition: 200ms ease-in-out;
        height: 10px;
        width: 10px;
        border-radius: 50%;
        background: white;
        margin-left: 5px;
        position: relative;

        &:first-child {
          margin-left: 0;
        }

        &:after {
          transition: 200ms ease-in-out;
          display: block;
          content: '';
          top: 2.5px;
          left: 2.5px;
          filter: blur(2px);
          opacity: 1;
          position: absolute;
          height: 5px;
          width: 4px;
          cursor: pointer;
        }
      }

      span#red {
        background: #ff0043;
      }

      span#green {
        background: forestgreen;
      }

      span#yellow {
        background: #ffc860;
      }
    }

    div#type {
      display: block;
      border-radius: 6px;
      padding: 5px;
      width: 100%;
      background: white;
      position: relative;
    }

    div.bubbles {
      cursor: pointer;
      width: 20px;
      height: 20px;
      background: #ccc;
      box-shadow: 0 2px 6px rgba(0, 0, 0, 0.1), 0 -2px 6px rgba(255, 255, 255, 0.4) inset;
      z-index: 99;
      position: absolute;
      right: -20px;
      top: 100px;
      display: flex;
      align-items: center;
      justify-content: center;

      &:hover img {
        transition: 200ms;
        transform: scale(1.2);
      }

      img {
        width: 65%;
        padding: 1px;
      }
    }

    div.messages {
      overflow: hidden;
      align-self: flex-start;
      justify-self: flex-start;
      margin-top: 40px;
      height: 400px;
      width: 100%;

      p {
        position: relative;
        color: #222;
        padding: 5px 10px;
        background: #aaa;
        border: 1px solid #a3a3a3;
        font-size: 14px;
        border-radius: 4px;
        margin: 5px;
        box-shadow: 0 4px 4px rgba(0, 0, 0, 0.5), 0 6px 6px rgba(255, 255, 255, 0.2) inset;
        font-weight: 500;
        font-family: Lato, sans-serif;

        &:after {
          content: '';
          position: absolute;
          left: 0;
          top: 50%;
          width: 0;
          height: 0;
          border: 18px solid transparent;
          border-right-color: #aaa;
          border-left: 0;
          border-top: 0;
          margin-top: -9px;
          margin-left: -30px;
        }
      }
    }
  }

  .cursor-pointer {
    transition: 200ms;
    cursor: pointer;

    &:hover {
      font-weight: 600;
      transform: scale(1.02);
    }
  }

  @-webkit-keyframes glow {
    from {
      box-shadow: 0 0 5px #fff, 0 0 6px #fff, 0 0 2px #e60073, 0 0 3px #e60073, 0 0 7px #e60073, 0 0 8px #e60073, 0 0 2px #e60073;
    }
    to {
      box-shadow: 0 0 6px #fff, 0 0 4px #ff4da6, 0 0 8px #ff4da6, 0 0 5px #ff4da6, 0 0 1px #ff4da6, 0 0 3px #ff4da6, 0 0 6px #ff4da6;
    }
  }

  /*@-webkit-keyframes appear {*/
  /*  0% {*/
  /*    transform: translateY(200%);*/
  /*  }*/
  /*  100% {*/
  /*    transform: translateY(0);*/
  /*  }*/
  /*}*/

  .fade-enter-active, .fade-leave-active {
    transform: translateX(0);
    transition: 0.25s;
  }

  .fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */
  {
    opacity: 0;
    transform: translateX(-100%);
  }

  .fade-leave, .fade-leave-active {
    transform: translateX(-100%);
  }

  @media screen and (max-width: 768px) {
    section {
      padding: 0 25px;
    }
    .toolbar {
      transform: scale(0.9);
    }
    .bubbles {
      display: none;
    }
  }

  @media screen and (max-width: 345px) {
    section {
      padding: 0 25px;
    }
    .toolbar {
      transform: scale(0.7);
    }
    .bubbles {
      display: none;
    }
  }
</style>
