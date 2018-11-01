<template>
    <div id="practice" class="container">
        <div class="row">
            <div class="col-xs-12 col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3">
                <h1>Directives Exercise</h1>
                <!-- Exercise -->
                <!-- Build a Custom Directive which works like v-on (Listen for Events) -->
                <button v-local-event:click="click">Click me!</button>
                <button v-local-event:keypress="keypress">Keypress me!</button>

                <div id="box" class="box" v-local-event:mouseenter="mouseenter" v-local-event:mouseleave="mouseleave">Mouseover Me</div>

            </div>
        </div>
    </div>
</template>

<script>
    export default {
        directives: {
            'local-event': {
                bind(el, binding){
                    el.addEventListener(binding.arg, binding.value)
                }
            }
        }, 
        methods: {
            click(){
                const box = document.getElementById('box');
                box.style.background = 'blue';
            },
            keypress(){
                const box = document.getElementById('box');
                box.style.background = 'lightblue';
            },
            mouseenter(){
                const box = document.getElementById('box');
                if (box.classList.contains('animate-rotate')) {
                    box.style.animationPlayState = 'running';
                } else {
                    box.classList.add('animate-rotate');
                }
            },
            mouseleave(){
                const box = document.getElementById('box');
                box.style.animationPlayState = 'paused';
            }
        }
    }
</script>

<style>
    .box {
        width: 100px;
        height: 100px;
        border: 1px solid gray;
        margin-top: 20px;
        transition: all 0.3s;
    }
    .animate-rotate {
        animation: rotating 50s infinite;
    }
    @keyframes rotating {
        0% { transform: rotate(0deg) }
        100% { transform: rotate(360deg); }
    }
</style>
