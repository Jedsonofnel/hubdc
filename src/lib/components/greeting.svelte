<script>
    let threats = [
        "please?",
        "or else",
        "if you like donuts",
        "and lent addresses!"
    ]
    let threat = threats[Math.floor(Math.random() * threats.length)]
</script>

<section id="greeting">
    <h1>
        <span id="come">COME</span>
        <span id="to">TO</span>
        <span id="the">THE</span>
        <span id="hub">HUB</span>
        <span id="threat">({threat})</span>
    </h1>
</section>

<style lang="scss">
    @use '../styles/vars' as v;

    section {
        margin: 0;
        padding: 0;
        height: calc(max(585px, 90vh));
    }

    h1 {
        height: 100%;
        display: flex;
        margin: 0;
        flex-direction: column;
        align-items: center;
        justify-content: space-evenly;

        font-size: v.$greeting-size;
        font-family: v.$serif;
    }

    #come {color: v.$darkblue;}

    #to {
        display: block;
        border-radius: 50%;
        padding: 0.5rem;
        background-color: v.$turquoise;
        color: v.$white;
    }

    #the  { color: v.$darkblue; font-style: italic; }

    #hub  {
        width: 80%;
        text-align: center;
        background-color: v.$darkblue;
        border-radius: 0.5rem;
        color: v.$white;
    }

    #threat {
        font-size: 1.2rem;
        font-family: v.$sans;
        position: relative;
        bottom: 0;
        color: v.$darkblue
    }
</style>
