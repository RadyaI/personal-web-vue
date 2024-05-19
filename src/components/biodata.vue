<template>
    <div>
        <div class="wrapper">
            <div class="menu">
                <div class="skill animate__animated animate__fadeIn" @click="display = 'skill'"
                    :class="{ selected: display == 'skill', 'animate__fadeOutUp': prosesGantiDisplay }">
                    <h3>SKILL</h3>
                </div>
                <div class="project animate__animated animate__fadeIn" @click="display = 'project'"
                    :class="{ selected: display == 'project', 'animate__fadeOutUp': prosesGantiDisplay }">
                    <h3>PROJECT</h3>
                </div>
                <div class="experience animate__animated animate__fadeIn" @click="display = 'experience'"
                    :class="{ selected: display == 'experience', 'animate__fadeOutUp': prosesGantiDisplay }">
                    <h3>EXPERIENCE</h3>
                </div>
            </div>
            <div class="card">
                <div class="card-skill animate__animated animate__fadeInDown"
                    :class="{ 'animate__fadeOutUp': prosesGantiDisplay }" v-if="display == 'skill'">
                    <div class="card-point">
                        Laravel
                    </div>
                    <div class="card-point">
                        SQL
                    </div>
                    <div class="card-point">
                        Javascript
                    </div>
                    <div class="card-point">
                        Vuejs
                    </div>
                    <div class="card-point">
                        Nuxtjs
                    </div>
                    <div class="card-point">
                        Firebase
                    </div>
                    <div class="card-point">
                        HTML/CSS
                    </div>
                </div>
                <div class="card-skill animate__animated animate__fadeInUp" :class="{ 'animate__fadeOutDown' : prosesGantiDisplay}"
                    v-if="display == 'skill'">
                    <div class="card-point">
                        Firebase
                    </div>
                    <div class="card-point">
                        Bootstrap
                    </div>
                    <div class="card-point">
                        postman
                    </div>
                    <div class="card-point">
                        git
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import 'animate.css'

export default {
    name: 'app',
    props: {
        prosesGantiDisplay: Boolean
    },
    data() {
        return {
            display: 'skill'
        }
    },
    mounted() {
    }
}
</script>

<style scoped>
.wrapper {
    /* border: 1px solid white; */
    margin-top: 30px;
    width: 100%;
    height: 50vh;
}

.wrapper .menu {
    /* border: 1px solid greenyellow; */
    width: 90%;
    margin: 0 auto;
    height: auto;
    color: white;
    display: flex;
    justify-content: space-between;
    padding: 10px 30px 10px 20px;
    user-select: none
}

.skill,
.project,
.experience {
    transition: transform 0.2s;
}

.skill:hover,
.project:hover,
.experience:hover {
    transform: scale(1.2);
}

.wrapper .card {
    /* border: 1px solid greenyellow; */
    width: 100%;
    margin-top: 10px;
    height: 250px;
    overflow-y: auto;
}

.selected {
    border-bottom: 1px solid white;
}

.card .card-skill {
    /* flex-wrap: wrap; */
    display: flex;
    gap: 16px;
    padding: 16px;
    overflow-x: scroll;
    overflow-y: auto;
}

.card .card-skill::-webkit-scrollbar {
    width: 0;
    height: 0;
}

.card .card-skill .card-point {
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 1.2rem;
    font-weight: bolder;
    text-transform: uppercase;
    padding: 10px 30px;
    background-color: black;
    border: 1px solid white;
    border-radius: 4px;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
    color: white;
    margin-right: 10px;
    margin-top: 10px;
    transition: transform 0.3s;
}

.card .card-skill .card-point:hover {
    transform: scale(1.1);
    background-color: white;
    color: black;
}

@media only screen and (min-width: 1000px) {
    .card .card-skill .card-point {
        margin: 0 auto;
    }
}

@media only screen and (max-width:700px) {
    .wrapper .card::-webkit-scrollbar {
        width: 0;
        height: 0;
    }

    .card .card-skill {
        flex-direction: column
    }
}
</style>