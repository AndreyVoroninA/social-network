import React, {useState, useEffect} from "react";
import s from './PropfileStatus.module.css';

const ProfileStatus = (props) => {

      let [editMode, setEditMode] = useState(false);
      let [status, setStatus] = useState(props.status);

      useEffect(() => {
         setStatus(props.status)
      }, [props.status])

      const activatedEditMode = () => {
         setEditMode(true)
      }
      const deActivatedEditMode = () => {
         setEditMode(false)
         props.updateStatus(status);
      }
     const onStatusChange = (e) => {
         setStatus(e.currentTarget.value)
      }

      return (
         <div className={s.block}>
            {!editMode &&
               <div>
                 <span onDoubleClick={activatedEditMode}>{props.status || 'Add status?'}</span>
             </div>
            }
            {editMode && 
               <div>
                <input className={s.input} 
                autoFocus={true} onBlur={deActivatedEditMode} onChange={onStatusChange} value={status}></input>
            </div>
            }
         </div>
      )
   }

export default ProfileStatus;