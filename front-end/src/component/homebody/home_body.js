import React, { useState } from 'react';
import './home_body.css';
// class HomeBody extends Component {
//   constructor(){
//     super();
//     this.state ={
//       input_text : "",
//     };
//   this.handleChange = this.handleChange.bind(this);

//   }

//    handleChange(){
//       console.log("hi")
//   }
  
//   render() {
//     return (
//         <div className='BodyWrap'>
//             <section className='HomeImageSection'>
//                 <div className = "HomeImageDiv">
//                         <button className='JoinRoomButton'>Join Room</button>
//                         <button className='CreateRoomButton'>Create Room</button>
//                 </div>
//             </section>
//             <section className='HomeRoomSection'>
//                 <div className='RoomIdDiv'>
//                     <input className='RoomId' onChange={this.handleChange} type='password'></input>
//                 </div>
//             </section>
//       </div>
//     )
//   }
// }

function HomeBody(){
  const [roomId,setRoomId] = useState('');
  function onJoinRoomClick(event){
    "";
  }
  function onCreateRoomClick(event){
    "";
  }
  // function 

  return (
            <div className='BodyWrap'>
                <section className='HomeImageSection'>
                    <div className = "HomeImageDiv">
                            <button onClick ={onJoinRoomClick} className='JoinRoomButton'>Join Room</button>
                            <button onClick ={onCreateRoomClick} className='CreateRoomButton'>Create Room</button>
                    </div>
                </section>
                <section className='HomeRoomSection'>
                    <div className='RoomIdDiv'>
                        <input className='RoomId' onChange={(event)=> setRoomId(event.target.value)} type='text'></input>
                    </div>
                </section>
          </div>
        )
}

export default HomeBody
