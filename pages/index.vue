<template>
    <NuxtLayout>
        <div class="index">
            <section>
                <video autoplay loop muted playsinline>
                    <source src="/video/df_video_1.mp4">
                </video>
                <div class="content info">
                    <div>
                        <h1><span>东东</span><span>电竞</span></h1>
                        <h2>DongDong E-Game</h2>
                        <h3>致力于为玩家提供最好的游戏体验</h3>
                    </div>
                    <img src="/image/banner_icon.png" alt="东东电竞" title="东东电竞">
                </div>
            </section>
            <section>
                <div class="content intduce">
                    <div class="intduce-item" data-aos="fade-right">
                        <Icon class="icon" name="ic:baseline-ads-click" />
                        <div>
                            <p>精准的匹配服务</p>
                            <p>可以根据陪玩类型、陪玩声线等</p>
                            <p>进行精准匹配</p>
                        </div>
                    </div>
                    <div class="intduce-item" data-aos="fade-left">
                        <Icon class="icon" name="ic:sharp-headset-mic" />
                        <div>
                            <p>高质量语音视频互动功能</p>
                            <p>您可以和陪玩/好友进行</p>
                            <p>一对一私聊语音/视频互动</p>
                        </div>
                    </div>
                    <div class="intduce-item" data-aos="fade-right">
                        <Icon class="icon" name="ic:outline-sentiment-very-satisfied" />
                        <div>
                            <p>海量的优质陪玩</p>
                            <p>颜值、 声线、技术面面俱到</p>
                        </div>
                    </div>
                    <div class="intduce-item" data-aos="fade-left">
                        <Icon class="icon" name="ic:baseline-emoji-food-beverage" />
                        <div>
                            <p>友好的社区交流氛围</p>
                            <p>发发状态，看看日常分享</p>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    </NuxtLayout>
</template>

<script lang="ts" setup>
const { $aos } = useNuxtApp()

const swiperContainerRef = ref(null)
// const swiper = useSwiper(swiperContainerRef)

onMounted(() => {
    $aos.init()
})

</script>

<style scoped lang="scss">
.index {
    min-height: 100vh;
    background: #000;
}

section {
    height: 100vh;
    font-family: "sans";
    position: relative;

    video {
        width: 100%;
        height: 100%;
        filter: brightness(.4);
    }

    .info {
        width: 100%;
        display: flex;
        align-items: center;
        justify-content: flex-start;
        gap: 64px;
        position: absolute;
        left: 50%;
        top: 50%;
        transform: translate(-50%, -50%);
        z-index: 1;

        h1 {
            font-size: 92px;
            font-family: "YouSheBiaoTiHei";
            font-weight: bold;
            letter-spacing: 0.1em;
            text-shadow: 4px 0 0 #fff, -4px 0 0 #fff, 0 4px 0 #fff, 0 -4px 0 #fff;

            span {
                &:first-of-type {
                    color: #1e90ff
                }

                &:last-of-type {
                    color: #000
                }
            }
        }

        h2 {
            font-size: 36px;
            color: #fff;
            font-family: "YouSheBiaoTiHei";
            font-weight: bold;
        }

        h3 {
            font-size: 16px;
            color: #fff;
            text-decoration: underline;
        }

        img {
            width: 300px;
            height: 300px;
            object-fit: contain;
        }
    }

    .intduce {
        width: 960px;
        height: 100%;
        padding: 64px 8px;
        flex-direction: column;
    }

    .intduce-item {
        flex: 1;
        display: flex;
        align-items: center;
        justify-content: flex-start;
        gap: 32px;
        width: 100%;
        padding: 30px;
        font-size: 16px;
        color: #fff;
        box-sizing: border-box;
        position: relative;

        * {
            position: relative;
            z-index: 2;
        }

        &:nth-of-type(2n) {
            justify-content: flex-end;
        }

        &::before {
            content: "";
            display: block;
            width: 55%;
            height: 100%;
            position: absolute;
            top: 0;
            z-index: 1;
        }

        &:nth-of-type(2n+1) {
            &::before {
                left: 0;
                background-color: #1e90ff;
                transform: perspective(80px) rotateY(5deg);
            }
        }

        &:nth-of-type(2n) {
            &::before {
                right: 0;
                background-color: #1e90ff;
                transform: perspective(80px) rotateY(-5deg);
            }
        }

        .icon {
            font-size: 64px;
        }

        p {
            line-height: 2;
        }
    }
}

@media screen and (max-width: 750px) {
    .index {
        min-height: auto;
    }

    section {
        height: auto;

        .info {
            gap: 16px;

            h1 {
                font-size: 24px;
                text-shadow: 2px 0 0 #fff, -2px 0 0 #fff, 0 2px 0 #fff, 0 -2px 0 #fff;
            }

            h2 {
                font-size: 10px;
            }

            h3 {
                font-size: 10px;
            }

            img {
                width: 82px;
                height: 82px;
            }
        }

        .intduce {
            width: 100%;
            overflow: hidden;
        }

        .intduce-item {
            flex: none;
            height: 120px;
            margin: 8px 0;
            padding: 16px 30px;
            border-radius: 6px;
            background-color: #1e90ff;

            &:nth-of-type(2n) {
                justify-content: flex-start;
            }

            &::before {
                content: unset;
            }

            .icon {
                font-size: 32px;
            }

            p {
                font-size: 16px;
                line-height: normal;
            }
        }
    }

}
</style>