import React from "react";
import s from "./ProfileInfo.module.css";

const ProfileInfo = () => {
   return (
      <div>
         <div>
            <img
               className={s.mainImg}
               alt="Fon"
               src="https://get.wallhere.com/photo/1920x1200-px-ART-artistic-artwork-creepy-dark-evil-fantasy-Halloween-horror-original-psychedelic-scary-spooky-1615845.jpg"
            />
         </div>
         <div className={s.profileInfo}>
            <div >
               <img className={s.avaImg}
               src="https://desifre.net/wp-content/uploads/2019/12/Led-Mask-Style-Full-HD-Wallpaper-Mobile-4.jpg"/>
            </div>
            <div className={s.des}>
               Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat omnis fugiat vitae in deserunt odio atque? Corporis ipsam asperiores ab repellat voluptas dolore quo ex repudiandae eius enim delectus quam, labore possimus numquam quasi neque corrupti veritatis voluptatem. Perspiciatis necessitatibus molestias dignissimos voluptatibus rerum! Minima sapiente illum numquam provident. Ex veritatis labore incidunt illum, voluptas mollitia placeat aut ad nam, iste aliquam enim quo! Molestias totam tenetur perspiciatis quibusdam consequuntur animi ullam cum quos dolores temporibus nesciunt eos soluta dolorum reprehenderit exercitationem eius inventore nobis suscipit, repellendus quam? Impedit dolores, id expedita sunt eum quam in natus aliquid dolorem quidem.
               
            </div>
         </div>
      </div>
   );
};

export default ProfileInfo;
