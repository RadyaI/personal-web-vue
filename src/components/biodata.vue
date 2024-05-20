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
                <div class="experience animate__animated animate__fadeIn" @click="display = 'exp'"
                    :class="{ selected: display == 'exp', 'animate__fadeOutUp': prosesGantiDisplay }">
                    <h3>EXPERIENCE</h3>
                </div>
            </div>
            <div class="card">
                <!-- CARD SKILL -->
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
                <div class="card-skill animate__animated animate__fadeInUp"
                    :class="{ 'animate__fadeOutDown': prosesGantiDisplay }" v-if="display == 'skill'">
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
                <!-- CARD SKILL -->

                <!-- CARD PROJECT -->
                <div class="card-project" v-if="display == 'project'">

                    <div class="card-point animate__animated animate__fadeInLeft"
                        :class="{ 'animate__fadeOutLeft': prosesGantiDisplay }">
                        <div class="title"><i class="fa-solid fa-book"></i> <span> Belajar-Dirumah
                            </span></div>
                        <div class="desc"><small>Website belajar dirumah</small></div>
                        <div class="action">
                            <button class="btn-code"><a href="https://github.com/RadyaI/Belajar-Dirumah"
                                    target="_blank">Code</a></button>
                            <button class="btn-live"><a href="https://belajarlab.vercel.app"
                                    target="_blank">Live</a></button>
                        </div>
                    </div>
                    <div class="card-point animate__animated animate__fadeInLeft"
                        :class="{ 'animate__fadeOutLeft': prosesGantiDisplay }">
                        <div class="title"><i class="fa-solid fa-book"></i> <span> Quran
                            </span></div>
                        <div class="desc"><small>Al-Quran menggunakan vuejs dan firebase + api dari santrikoding</small>
                        </div>
                        <div class="action">
                            <button class="btn-code"><a href="https://github.com/RadyaI/quran"
                                    target="_blank">Code</a></button>
                            <button class="btn-live"><a href="https://myalquran.vercel.app/"
                                    target="_blank">Live</a></button>
                        </div>
                    </div>
                    <div class="card-point animate__animated animate__fadeInLeft"
                        :class="{ 'animate__fadeOutLeft': prosesGantiDisplay }">
                        <div class="title"><i class="fa-solid fa-book"></i> <span> To-Do-List-VueJs
                            </span></div>
                        <div class="desc"><small>Membuat Website To Do List Menggunakan Vue js Dan Firebase</small>
                        </div>
                        <div class="action">
                            <button class="btn-code"><a href="https://github.com/RadyaI/To-Do-List-VueJs"
                                    target="_blank">Code</a></button>
                            <button class="btn-live"><a href="https://webtodolist.vercel.app"
                                    target="_blank">Live</a></button>
                        </div>
                    </div>
                    <div class="card-point animate__animated animate__fadeInLeft"
                        :class="{ 'animate__fadeOutLeft': prosesGantiDisplay }">
                        <div class="title"><i class="fa-solid fa-book"></i> <span> chatwoe
                            </span></div>
                        <div class="desc"><small>Realtime chat menggunakan vuejs dan firebase</small></div>
                        <div class="action">
                            <button class="btn-code"><a href="https://github.com/RadyaI/chatwoe"
                                    target="_blank">Code</a></button>
                            <button class="btn-live"><a href="https://chatwoe.vercel.app"
                                    target="_blank">Live</a></button>
                        </div>
                    </div>
                    <div class="card-point animate__animated animate__fadeInLeft"
                        :class="{ 'animate__fadeOutLeft': prosesGantiDisplay }">
                        <div class="title"><i class="fa-solid fa-book"></i> <span> typing-test-vue
                            </span></div>
                        <div class="desc"><small>Typing test menggunakan vuejs dan firebase</small></div>
                        <div class="action">
                            <button class="btn-code"><a href="https://github.com/RadyaI/typing-test-vue"
                                    target="_blank">Code</a></button>
                            <button class="btn-live"><a href="https://typingmow.vercel.app"
                                    target="_blank">Live</a></button>
                        </div>
                    </div>
                    <div class="card-point animate__animated animate__fadeInLeft"
                        :class="{ 'animate__fadeOutLeft': prosesGantiDisplay }">
                        <div class="title"><i class="fa-solid fa-book"></i> <span> random-hadist-generator
                            </span></div>
                        <div class="desc"><small>Random Hadist Generator with vue js</small></div>
                        <div class="action">
                            <button class="btn-code"><a href="https://github.com/RadyaI/random-hadist-generator"
                                    target="_blank">Code</a></button>
                            <button class="btn-live"><a href="https://random-hadist-generator.vercel.app"
                                    target="_blank">Live</a></button>
                        </div>
                    </div>
                    <div class="card-point animate__animated animate__fadeInLeft"
                        :class="{ 'animate__fadeOutLeft': prosesGantiDisplay }">
                        <div class="title"><i class="fa-solid fa-book"></i> <span> express-api
                            </span></div>
                        <div class="desc"><small>Rest api menggunakan expressJS</small></div>
                        <div class="action">
                            <button class="btn-code"><a href="https://github.com/RadyaI/express-api"
                                    target="_blank">Code</a></button>
                            <button class="btn-live"><a href="#">X</a></button>
                        </div>
                    </div>
                    <div class="card-point animate__animated animate__fadeInLeft"
                        :class="{ 'animate__fadeOutLeft': prosesGantiDisplay }">
                        <div class="title"><i class="fa-solid fa-book"></i> <span> sanctum-laravel
                            </span></div>
                        <div class="desc"><small>Implementasi sanctum laravel pada rest-api sederhana</small></div>
                        <div class="action">
                            <button class="btn-code"><a href="https://github.com/RadyaI/implementasi-sanctum-laravel"
                                    target="_blank">Code</a></button>
                            <button class="btn-live"><a href="#">X</a></button>
                        </div>
                    </div>
                    <div class="card-point animate__animated animate__fadeInLeft"
                        :class="{ 'animate__fadeOutLeft': prosesGantiDisplay }">
                        <div class="title"><i class="fa-solid fa-book"></i> <span> hotel-api-laravel
                            </span></div>
                        <div class="desc"><small>hotel restful api with laravel 9</small></div>
                        <div class="action">
                            <button class="btn-code"><a href="https://github.com/RadyaI/hotel-api-laravel"
                                    target="_blank">Code</a></button>
                            <button class="btn-live"><a href="#">X</a></button>
                        </div>
                    </div>
                    <div class="card-point animate__animated animate__fadeInLeft"
                        :class="{ 'animate__fadeOutLeft': prosesGantiDisplay }">
                        <div class="title"><i class="fa-solid fa-book"></i> <span> cafe-api-laravel
                            </span></div>
                        <div class="desc"><small>Cafe management restapi laravel 9</small></div>
                        <div class="action">
                            <button class="btn-code"><a href="https://github.com/RadyaI/cafe-api-laravel"
                                    target="_blank">Code</a></button>
                            <button class="btn-live"><a href="#">X</a></button>
                        </div>
                    </div>
                    <div class="card-point animate__animated animate__fadeInLeft"
                        :class="{ 'animate__fadeOutLeft': prosesGantiDisplay }">
                        <div class="title"><i class="fa-solid fa-book"></i> <span> SistemPerpustakaan-api
                            </span></div>
                        <div class="desc"><small>Sistem perpustakaan menggunakan laravel</small></div>
                        <div class="action">
                            <button class="btn-code"><a href="https://github.com/RadyaI/SistemPerpustakaan-api-laravel"
                                    target="_blank">Code</a></button>
                            <button class="btn-live"><a href="#">X</a></button>
                        </div>
                    </div>
                    <div class="card-point animate__animated animate__fadeInLeft"
                        :class="{ 'animate__fadeOutLeft': prosesGantiDisplay }">
                        <div class="title"><i class="fa-solid fa-book"></i> <span> TokoOnline-phpnative
                            </span></div>
                        <div class="desc"><small>Toko Online Menggunakan PHP Native</small></div>
                        <div class="action">
                            <button class="btn-code"><a href="https://github.com/RadyaI/TokoOnline-phpnative"
                                    target="_blank">Code</a></button>
                            <button class="btn-live"><a href="#">X</a></button>
                        </div>
                    </div>
                    <div class="card-point animate__animated animate__fadeInLeft"
                        :class="{ 'animate__fadeOutLeft': prosesGantiDisplay }">
                        <div class="title"><i class="fa-solid fa-book"></i> <span> SistemPembayaranSpp
                            </span></div>
                        <div class="desc"><small>Sistem Pembayaran SPP Menggunakan PHP Native</small></div>
                        <div class="action">
                            <button class="btn-code"><a href="https://github.com/RadyaI/SistemPembayaranSpp-phpnative"
                                    target="_blank">Code</a></button>
                            <button class="btn-live"><a href="#">X</a></button>
                        </div>
                    </div>
                    <div class="card-point animate__animated animate__fadeInLeft"
                        :class="{ 'animate__fadeOutLeft': prosesGantiDisplay }">
                        <div class="title"><i class="fa-solid fa-book"></i> <span> SistemPerpustakaanOnline
                            </span></div>
                        <div class="desc"><small>Sistem Perpustakaan Online Menggunakan PHP Native</small></div>
                        <div class="action">
                            <button class="btn-code"><a
                                    href="https://github.com/RadyaI/SistemPerpustakaanOnline-phpnative"
                                    target="_blank">Code</a></button>
                            <button class="btn-live"><a href="#">X</a></button>
                        </div>
                    </div>
                </div>
                <!-- CARD PROJECT -->

                <!-- CARD EXP -->
                <div class="card-exp" v-if="display == 'exp'">
                    <div class="card-point animate__animated animate__fadeInLeft" :class="{'animate__fadeOutLeft' : prosesGantiDisplay}">
                        <div class="title"><i class="fa-solid fa-school"></i> <span>SMK Telkom Malang</span></div>
                        <div class="time"><small>2022 - Now</small></div>
                    </div>
                    <div class="card-point animate__animated animate__fadeInLeft" :class="{'animate__fadeOutLeft' : prosesGantiDisplay}" v-if="innerWidth <= 700">
                        <i class="fa-solid fa-arrow-down"></i>
                    </div>
                    <div class="card-point animate__animated animate__fadeInLeft" :class="{'animate__fadeOutLeft' : prosesGantiDisplay}" v-if="innerWidth >= 700">
                        <i class="fa-solid fa-arrow-right"></i>
                    </div>
                    <div class="card-point animate__animated animate__fadeInLeft" :class="{'animate__fadeOutLeft' : prosesGantiDisplay}">
                        <!-- <div class="title"><i class="fa-solid fa-school"></i> <span>?</span></div> -->
                        <div class="time"><small>?</small></div>
                    </div>
                </div>
                <!-- CARD EXP -->
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
            display: 'skill',
            showArrow: false,
            innerWidth: null
        }
    },
    mounted() {
        this.innerWidth = innerWidth
        console.log(innerWidth)
    }
}
</script>

<style scoped>
.wrapper {
    /* border: 1px solid white; */
    margin-top: 30px;
    width: 100%;
    height: 1vh;
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
    overflow-x: auto;
}

.selected {
    border-bottom: 1px solid white;
}

.card .card-skill {
    /* border: 1px solid white; */
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

.card .card-project {
    /* border: 1px solid white; */
    overflow-x: scroll;
    display: flex;
    padding: 10px;
}

.card .card-project::-webkit-scrollbar {
    width: 12px;
    height: 12px;
}

.card .card-project::-webkit-scrollbar-track {
    background: #f1f1f1;
    border-radius: 10px;
}

.card .card-project::-webkit-scrollbar-thumb {
    background: #888;
    border-radius: 10px;
    border: 3px solid #f1f1f1;
}

.card .card-project::-webkit-scrollbar-thumb:hover {
    background: #555;
}

.card .card-project .card-point {
    color: white;
    background-color: black;
    margin: 10px 0 0 10px;
    width: 300px;
    padding: 18px;
    height: fit-content;
    border: 1px solid gray;
    border-radius: 10px;
}

.card .card-project .card-point .title span {
    color: #007cba;
    font-weight: bolder;
    margin-left: 5px;
}

.card .card-project .card-point .desc {
    margin-top: 10px;
    /* border: 1px solid red; */
    width: 100%;
    height: auto;
    max-width: 120ch;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
}

.card .card-project .card-point .action {
    margin-top: 15px;
}

.card .card-project .card-point .action button {
    padding: 7px 17px;
    font-weight: bolder;
    background-color: black;
    color: white;
    border: 1px solid white;
    cursor: none;
}

.btn-code {
    border-radius: 5px 0 0 5px;
    transition: transform 0.3s;
}

.btn-live {
    border-radius: 0 5px 5px 0;
    transition: transform 0.3s;
}

.btn-live:hover,
.btn-code:hover {
    transform: scale(1.1);
}

.card .card-exp {
    display: flex;
    gap: 16px;
    padding: 16px;
    overflow-x: auto;
    overflow-y: auto;
}

.card .card-exp .card-point {
    color: white;
    background-color: black;
    margin: 10px 0 0 10px;
    width: fit-content;
    padding: 18px;
    /* height: fit-content; */
    padding-bottom: 20px;
    border: 1px solid gray;
    border-radius: 10px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: start;
    transition: transform 0.3s, background-color 0.3s, color 0.3s,; 
}

.card .card-exp .card-point:hover{
    transform: scale(1.1);
    background-color: white;
    color: black;
}

.card .card-exp .card-point .title span {
    margin-left: 10px;
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

    .card .card-project {
        flex-direction: column;
    }

    .card .card-exp {
        flex-direction: column;
        justify-content: center;
        align-items: center;
    }

    .wrapper {
        height: 100vh;
    }

    .wrapper .card {
        height: 100vh;
    }
}
</style>