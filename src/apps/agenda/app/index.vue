<template>
  <div>
    <md-content>
      <md-card md-with-hover>
        <md-card-media-cover md-solid>
          <md-card-media md-ratio="16:9">
            <img src="/images/welcome.png" alt="Welcome" />
          </md-card-media>
          <md-card-area>
            <md-card-header>
              <div class="md-title">Welcome &amp; snacks</div>
            </md-card-header>

            <md-card-content>
              <h5>5:30pm - 6:00pm</h5>
              <p>
                Welcome! Get yourself comfortable and have a drink or a bite.
              </p>
            </md-card-content>
          </md-card-area>
        </md-card-media-cover>
      </md-card>

      <md-card md-with-hover>
        <md-card-media-cover md-solid>
          <md-card-media md-ratio="16:9">
            <img src="/images/present.png" alt="Welcome" />
          </md-card-media>
          <md-card-area>
            <md-card-header>
              <div class="md-title">Presentation</div>
            </md-card-header>

            <md-card-content>
              <h5>6:00pm - 7:30pm</h5>
              <p>Let's get to the main business straight.</p>
            </md-card-content>
          </md-card-area>
        </md-card-media-cover>
      </md-card>
      <md-card md-with-hover>
        <md-card-media-cover md-solid>
          <md-card-media md-ratio="16:9">
            <img src="/images/network.png" alt="Welcome" />
          </md-card-media>
          <md-card-area>
            <md-card-header>
              <div class="md-title">Q&amp;A</div>
            </md-card-header>

            <md-card-content>
              <h5>7:30pm - 8:00pm</h5>
              <p>Q&amp;A and follow by networking.</p>
            </md-card-content>
          </md-card-area>
        </md-card-media-cover>
      </md-card>
    </md-content>
  </div>
</template>

<style scoped>
.md-content {
  width: 100%;
  max-width: 960px;
  margin: 0 auto;
  padding: 24px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}
.md-card {
  margin: 20px;
  vertical-align: top;
  width: 80%;
}
</style>

<script>
export default {
  name: 'RegularCards'
};
</script>
