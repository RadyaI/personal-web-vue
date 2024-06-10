<template>
    <div class="load-container">
        <div class="moon">
            <div class="shadow"></div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'app'
}
</script>

<style scoped>
.load-container {
    /* border: 1px solid white; */
    width: 100%;
    height: 70vh;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center
}

.moon,
.shadow {
    margin: auto;
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    background: rgb(216, 216, 216);
    border-radius: 50%;
    height: 50px;
    width: 50px;
}

.shadow {
    width: 50px;
    height: 50px;
    position: relative;
    background: black;
    /*Change these color to the bg of your website*/
    transition: all .3s ease;
    animation: move_4123 1.2s infinite alternate ease-in-out;
    transform: translate3d(8px, -8px, 0);
}

@keyframes move_4123 {
    100% {
        transform: translate3d(36px, -36px, 0);
    }
}
</style>