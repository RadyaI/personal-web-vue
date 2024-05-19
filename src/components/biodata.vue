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

.wrapper .card {}

.selected {
    border-bottom: 1px solid white;
}
</style>