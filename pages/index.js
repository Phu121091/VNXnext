import Head from 'next/head';
import { Inter } from '@next/font/google';
import classNames from 'classnames/bind';
import styles from '@/styles/Home.module.scss';
import BlogHome from '@/views/BlogHome';
import Hottour from '@/views/Tour/Hottour';
import { SwiperSlide, Swiper } from 'swiper/react';
import { Autoplay } from 'swiper';

import 'swiper/css';
import 'swiper/css/effect-fade';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import SwiperSlideComp from '@/components/SwiperSlideComp';

import { CiStar } from 'react-icons/ci';
import { MdOutlinePlace } from 'react-icons/md';

import { banners } from '@/public/images';
import { Banner, ItemInfoHome } from '@/views';
import { Input, Button } from '@/components';

import { iconInfos } from '@/public/images';
// import ICON1 from '@/public/images/icons/iconInfo1.jpg';
import Country from '@/views/Country/Country';
import Feedback from '@/views/Feedback';
import Introduce2 from '@/views/Introduce2';

const cx = classNames.bind(styles);

const InfoFake = [
    {
        icon: iconInfos.icon1,
        title: 'excellent services',
        content:
            'The tours featured throughout our website are intended to give you ideas for whats possible when you travel with us. Treat them simply as inspiration',
    },
    {
        icon: iconInfos.icon4,
        title: 'local experts',
        content:
            'The tours featured throughout our website are intended to give you ideas for whats possible when you travel with us. Treat them simply as inspiration',
    },
    {
        icon: iconInfos.icon7,
        title: 'local price',
        content:
            'The tours featured throughout our website are intended to give you ideas for whats possible when you travel with us. Treat them simply as inspiration',
    },
    {
        icon: iconInfos.icon3,
        title: 'authentic & tailor-made tours',
        content:
            'The tours featured throughout our website are intended to give you ideas for whats possible when you travel with us. Treat them simply as inspiration',
    },
];

export default function Home() {
    return (
        <>
            <Head>
                <title>Vietnam DMC | Wellness | Luxury | MICE | Responsible | Packages | Indochina packages</title>
                <meta name="description" content="Generated by create next app" />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <link rel="icon" href="/assets/images/logo.png" />
            </Head>
            <div className={cx('wrapperBanner')}>
                <SwiperSlideComp className={cx('bodyBanner')}>
                    <SwiperSlide>
                        <Banner className={cx('bannerMain')} image={banners.halongbay} />
                    </SwiperSlide>
                    <SwiperSlide>
                        <Banner className={cx('bannerMain')} image={banners.resolt} />
                    </SwiperSlide>
                    <SwiperSlide>
                        <Banner className={cx('bannerMain')} image={banners.banner1} />
                    </SwiperSlide>

                    <div className={cx('sheaderBox')}>
                        <p className={cx('text')}>Luxury tailor-made tours to</p>
                        <h1 className={cx('titleHome')}>south asian</h1>
                        <div className={cx('boxSearch')}>
                            <Input
                                type="text"
                                className={cx('input1', 'input')}
                                leftIcon={<MdOutlinePlace />}
                                placeholder="Place"
                            />
                            <Input
                                type="text"
                                className={cx('input2', 'input')}
                                leftIcon={<CiStar />}
                                placeholder="Travel Style"
                            />
                            <Button className={cx('button')}>Search Tour</Button>
                        </div>
                    </div>
                </SwiperSlideComp>

                <Swiper
                    className={cx('boxInfo')}
                    modules={[Autoplay]}
                    grabCursor={true}
                    autoplay={{
                        delay: 8000,
                        disableOnInteraction: false,
                    }}
                    loop={true}
                    breakpoints={{
                        0: {
                            slidesPerView: 1,
                        },
                        640: {
                            slidesPerView: 2,
                        },
                        768: {
                            slidesPerView: 3,
                        },
                        1024: {
                            slidesPerView: 4,
                        },
                    }}
                >
                    {InfoFake.map((item, index) => (
                        <SwiperSlide key={index}>
                            <ItemInfoHome data={item} id={index + 1} />
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>
            <Introduce2 />
            <Country />
            <Hottour />
            <BlogHome />
            <Feedback />
        </>
    );
}
