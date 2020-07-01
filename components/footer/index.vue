<template>
    <div>
      <ul>
        <li>
          <a href="http://www.github.com/canersevince" target="_blank"><b-icon icon="github" size="is-medium"></b-icon></a>
        </li>
        <li>
          <a href="mailto:canersevince@gmail.com" target="_blank"><b-icon icon="email" size="is-medium"></b-icon></a>
        </li>
        <li>
          <a href="https://profile.codersrank.io/user/canersevince" target="_blank"><b-icon icon="stairs-box" size="is-medium"></b-icon></a>
        </li>
      </ul>
    </div>
</template>

<script>
    export default {
        name: "Footer"
    }
</script>

<style scoped lang="scss">
  div{
    padding: 15px;
    color: white;
    display: flex;
    align-items: center;
    justify-content: space-around;
    min-width: 100vw;
    ul{
      display: flex;
      align-items: center;
      justify-content: center;
      width: 100%;
      li{
        margin: 0 5px;
        a{
          color: white;
          text-decoration: none;
        }
      }
    }
    div{
      a{
        color: white;
        text-decoration: none;
      }
    }
  }
</style>
