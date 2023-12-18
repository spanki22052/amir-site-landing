import cls from "./Mainpage.module.scss";
import { useEffect, useState } from "react";
import "./mainpage.scss";
import { CSSTransition } from "react-transition-group";
import { Navbar } from "@/features/Navbar";
import ReactCardCarousel from "react-card-carousel";

const Mainpage = () => {
  const [inProp, setInProp] = useState(false);

  useEffect(() => {
    setInProp(true);
  }, []);

  return (
    <div className={cls.Mainpage}>
      <Navbar />

      <div className={cls.mainpageWrapper}>
        <div className={cls.leftSide}>
          <CSSTransition in={inProp} timeout={500} classNames="fade" appear>
            <img className={cls.logo} src="/images/logo.jpg" alt="logo" />
          </CSSTransition>
          <CSSTransition in={inProp} timeout={1500} classNames="fade1" appear>
            <div className={cls.nameLayout}>ASMR 999 Cutting</div>
          </CSSTransition>
          <CSSTransition in={inProp} timeout={500} classNames="fade2" appear>
            <div className={cls.welcomeLayout}>Welcome to my channel</div>
          </CSSTransition>
          <div className={cls.infoContainer}>
            ASMR Slicing Game is a fun and relaxing 3D ASMR simulator in which
            you will cut everything that comes to hand: from kinetic sand to
            unusual shapes. Time to stop and calm down, take a break from the
            worldly bustle. Beautiful cutting of kinetic sand with a pleasant
            sound especially at the end of the day or at bedtime oddly
            satisfying video sleep
          </div>
        </div>

        <div className={cls.rightSide}>
          <div className={cls.videosLayout} id="videos-layout">
            Most popular videos
          </div>
          <ReactCardCarousel autoplay={true} autoplay_speed={2500}>
            <div className={cls.videoContainer}>
              <img src="/img1.png" alt="img1" />

              <div className={cls.videoInfo}>
                <div className={cls.videoLayout}>
                  Very satisfying and relaxing ASMR slicing game
                </div>
                <div className={cls.videoWatches}>23 million views</div>
                <a
                  className={cls.watchItLink}
                  href="https://www.youtube.com/watch?v=VUfdc8DoUHk&t=2s"
                >
                  Watch now {">>"}
                </a>
              </div>
            </div>
            <div className={cls.videoContainer}>
              <img src="/img2.png" alt="img1" />

              <div className={cls.videoInfo}>
                <div className={cls.videoLayout}>
                  Very satisfying and relaxing ASMR slicing game
                </div>
                <div className={cls.videoWatches}>18 million views</div>
                <a
                  className={cls.watchItLink}
                  href="https://www.youtube.com/watch?v=E9JTzzGKXxs"
                >
                  Watch now {">>"}
                </a>
              </div>
            </div>
            <div className={cls.videoContainer}>
              <img src="/img3.png" alt="img1" />

              <div className={cls.videoInfo}>
                <div className={cls.videoLayout}>
                  ASMR Cutting game! Relaxing sounds! Satisfying ASMR Video
                </div>
                <div className={cls.videoWatches}>15 million views</div>
                <a
                  className={cls.watchItLink}
                  href="https://www.youtube.com/watch?v=a81AXyySbIo"
                >
                  Watch now {">>"}
                </a>
              </div>
            </div>
            <div className={cls.videoContainer}>
              <img src="/img4.png" alt="img1" />

              <div className={cls.videoInfo}>
                <div className={cls.videoLayout}>
                  Slice it all! Very satisfying and relaxing ASMR slicing game
                </div>
                <div className={cls.videoWatches}>23 million views </div>
                <a
                  className={cls.watchItLink}
                  href="https://www.youtube.com/watch?v=LyPG3NN0YFY"
                >
                  Watch now {">>"}
                </a>
              </div>
            </div>
          </ReactCardCarousel>
        </div>
      </div>
    </div>
  );
};

export default Mainpage;
