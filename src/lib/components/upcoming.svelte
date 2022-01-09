<script>
    const indexUpcomingEvents = async () => {
        try {
            const res = await fetch("https://www.api.hubdc.info/events/upcoming");
            if (!res.ok) {
                throw await res.json();
            } else {
                return await res.json();
            }
        } catch(error) {
            throw error;
        }
    };

    let events = indexUpcomingEvents();
</script>

{#await events}
    <section>
        <h2>Upcoming:</h2>
        <div class="template-bubble">
            <h3 class="loading">
                <span class="material-icons">
                    hourglass_bottom
                </span>
                Loading Events...
            </h3>
        </div>
    </section>

{:then events}
    <section>
        <h2>Upcoming:</h2>

        {#if events.length != 0}
            <div class="bubble">
                {#each events as event}
                    <div class="event">
                        <h3>{event.what}:</h3>
                        <div class="event-info">
                            <p>
                                <span class="material-icons">schedule</span>
                                <span class="event-detail">{event.when}</span>
                            </p>
                            <p>
                                <span class="material-icons">location_on</span>
                                <span class="event-detail">{event.loc}</span>
                            </p>
                        </div>
                    </div>
                {/each}
            </div>

        {:else}
            <div>
                <h3>No events found</h3>
            </div>
        {/if}
    </section>

{:catch errors}
    <section>
        <h2>Upcoming:</h2>
        <div>
            <h3>{errors[0].message}</h3>
        </div>
    </section>
{/await}

<style lang="scss">
    @use '../styles/vars' as v;
    @use '../styles/_reusables';

    h3, p {
        margin: 0;
        font-family: v.$sans;
    }

    p {
        font-size: 1.2rem;
        display: flex;
    }

    h3 {
        display: block;
        width: 40%;
        font-size: 1.25rem;
        padding-right: 0.5rem;
    }

    span {color: grey;}

    .event {
        display: flex;
        flex-direction: row;
        justify-content: space-betweeen;
        align-items: center;
    }

    .event-info {
        padding: 0.5rem;
        border-left: grey solid 0.2rem;
    }

    p + p {margin-top: 0.5rem;}
    .event + .event {margin-top: 2rem;}

    .template-bubble {
        height: 17.875rem;
        width: 100%;
        background-color: v.$silver;
        border-radius: 0.5rem;
        padding: 0.5rem;
        margin-bottom: 1rem;
        display: flex;
        justify-content: center;
        align-items: center;
    }

    .loading {
        width: auto;
        display: flex;
        color: grey;
    }
</style>
