import classNames from 'classnames/bind';
import Image from 'next/image';
import style from './footer.module.scss';
import Logo from '../../public/logo-w-2.png';
import { GiPhone } from 'react-icons/gi';
import { MdEmail } from 'react-icons/md';
import { GrFacebookOption } from 'react-icons/gr';
import { TiSocialInstagram } from 'react-icons/ti';
import { BsTwitter } from 'react-icons/bs';
import { TfiGoogle } from 'react-icons/tfi';
import { Section } from '@/components';
import Img1 from '../../public/1.webp';
import Img2 from '../../public/2.webp';
import Img3 from '../../public/3.webp';
import Img4 from '../../public/4.png';
import Img5 from '../../public/5.webp';
import Img6 from '../../public/6.webp';

const cx = classNames.bind(style);
const Listimg = [Img1, Img2, Img3, Img4, Img5, Img6];

function Footer() {
    return (
        <div className={cx('wrapper')}>
            <div className={cx('footer')}>
                <div className={cx('list-logo')}>
                    {Listimg.map((d) => (
                        <Image src={d} className={cx('img')} alt="logo-prize-vnxpedia" />
                    ))}
                </div>
                <hr className={cx('hr')} />
                <div className={cx('main')}>
                    <div className={cx('infor')}>
                        {/* <img src={Logo} className={cx("logo-img")} alt="logo-VNXpedia" /> */}
                        <Image src={Logo} className={cx('logo-img')} alt="logo-VNXpedia" />
                        <div className={cx('phone')}>
                            <GiPhone />
                            <div>+84901591111</div>
                        </div>
                        <div className={cx('email')}>
                            <MdEmail />
                            <div>info@vnxpedia.com</div>
                        </div>
                        <div className={cx('icon')}>
                            <div className={cx('item-icon')}>
                                <GrFacebookOption />
                            </div>
                            <div className={cx('item-icon')}>
                                <TiSocialInstagram />
                            </div>
                            <div className={cx('item-icon')}>
                                <BsTwitter />
                            </div>
                            <div className={cx('item-icon')}>
                                <TfiGoogle />
                            </div>
                        </div>
                    </div>
                    <div className={cx('list')}>
                        <div className={cx('title')}>OUR TOUR</div>
                        <p>vietnam</p>
                        <p>vietnam</p>
                        <p>vietnam</p>
                        <p>vietnam</p>
                        <p>vietnam</p>
                        <p>vietnam</p>
                    </div>
                    <div className={cx('list')}>
                        <div className={cx('title')}>AS TOUR OPERATOR</div>
                        <p>Why travel</p>
                        <p>Why travel</p>
                        <p>Why travel</p>
                        <p>Why travel</p>
                        <p>Why travel</p>
                    </div>
                    <div className={cx('about')}>
                        <div className={cx('title')}>ABOUT</div>
                        <p>
                            img elements must have an alt prop, either with meaningful text, or an empty string for
                            decorative img elements must have an alt prop, either with meaningful text
                        </p>
                        <div className={cx('Newsletter')}>Newsletter Sign up</div>
                        <div className={cx('sub')}>
                            <input type="text" placeholder="Your Email Address" />
                            <button type="button">SUBSCRIBE</button>
                        </div>
                    </div>
                </div>
                <hr className={cx('hr')} />
                <div className={cx('end')}>
                    <div className={cx('end-left')}>
                        <div className={cx('c')}>
                            <div>c</div>
                        </div>
                        <div>Copyright 2019 VNXpedia</div>
                    </div>
                    <div>All Rights Reserved</div>
                </div>
            </div>
        </div>
    );
}

export default Footer;
