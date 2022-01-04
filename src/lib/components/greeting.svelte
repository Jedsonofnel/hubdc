<script>
  let threats = [
    "please?",
    "or else",
    "if you like donuts",
    "and lent addresses!"
  ]
  let threat = threats[Math.floor(Math.random() * threats.length)]
</script>

<div id="greeting">
  <h1>
    <span id="come">COME</span>
    <span id="to">TO</span>
    <span id="the">THE</span>
    <span id="hub">HUB</span>
    <span id="threat">({threat})</span>
  </h1>
</div>

<style lang="scss">
  @import '../styles/vars.scss';

  div {
    margin: 0;
    padding: 0;
    max-width: 640px;
  }

  h1 {
    height: calc(max(600px, 90vh));
    display: flex;
    margin: 0;
    flex-direction: column;
    align-items: center;
    justify-content: space-evenly;

    font-size: $greeting-size;
    font-family: Georgia;
  }

  #come {color: $darkblue;}

  #to   {
    display: block;
    border-radius: 50%;
    padding: 0.5rem;
    background-color: $turquoise;
    color: $white;
  }

  #the  {color: $darkblue; font-style: italic;}

  #hub  {
    width: 80%;
    text-align: center;
    background-color: $darkblue;
    border-radius: 0.5rem;
    color: $white;
  }

  #threat {
    font-size: 1.2rem;
    position: relative;
    bottom: 0;
    color: $darkblue
  }
</style>
