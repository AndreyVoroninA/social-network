import React from "react";
import Preloader from "../../common/Preloader/Preloader";
import s from "./ProfileInfo.module.css";

const ProfileInfo = (props) => {
   if (!props.profile) {
      return <Preloader />
   }
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
               src={props.profile.photos.large}/>
            </div>
            <div className={s.des}>
            <div className={s.name}>{props.profile.fullName}</div>
               <div className={s.aboutMe}>{props.profile.aboutMe}</div>
               <div>Мои контакты:
               <div className={s.desItem1}>{props.profile.contacts.facebook}</div> 
               <div className={s.desItem2}>{props.profile.contacts.website} </div>
               <div className={s.desItem3}>{props.profile.contacts.vk}</div>
               <div className={s.desItem4}>{props.profile.contacts.twitter}</div>
               <div className={s.desItem5}>{props.profile.contacts.instagram}</div>
               <div className={s.desItem6}>{props.profile.contacts.youtube}</div>
               <div className={s.desItem7}>{props.profile.contacts.github}</div>
               <div className={s.desItem8}>{props.profile.contacts.mainLink}</div>
               <div>Работа: <div className={s.desItem9}>{props.profile.lookingForAJobDescription}</div></div>
               </div>
            </div>
         </div>
      </div>
   );
};

export default ProfileInfo;
