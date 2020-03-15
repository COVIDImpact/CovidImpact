<template>
  <div class="cta">
    <div class="cta__con">
      <div class="cta__con--info">
        We’ll notify you when government aid becomes available
      </div>
      <input
        class="cta__con--button"
        type="text"
        placeholder="example@mail.com"
      />
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
.cta {
  width: 100%;
  background-color: #f958ff;
}

.cta__con {
  padding: 1em 1em;
  background-color: #f958ff;
  height: 5em;
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-direction: column;
}
.cta__con--info {
  color: white;
}
.cta__con--button {
  margin-top: 0.5em;
  border-radius: 7px;
  border: none;
  text-indent: 1em;
  width: 100%;
  font-size: 1em;
  line-height: 1.5em;
}

@media screen and (min-width: 425px) {
  .cta__con {
    height: 4em;
    flex-direction: row;
  }
  .cta__con--button {
    width: 200px;
    margin-top: 0em;
  }
}
@media screen and (min-width: 450px) {
  .cta_con {
    height: 3em;
  }
}
@media screen and (min-width: 650px) {
  .cta__con {
    flex-direction: row;
    height: 2em;
  }
}
@media screen and (min-width: 768px) {
  .cta__con {
    padding: 1em 0em;

    width: 768px;
    margin: 0 auto;
  }
}
</style>
