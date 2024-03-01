import React, { useEffect, useState } from 'react'
import './PlayerEdit.scss'

const PlayerEdit = ({ session, setSession, display, setDisplay }) => {

    const [formData, setFormData] = useState({
        xName: session.x.name,
        xColor: session.x.color || '#ffffff',
        oName: session.o.name,
        oColor: session.o.color || '#ffffff'
    });

    useEffect(() => {
        setFormData({
            xName: session.x.name,
            xColor: session.x.color || '#ffffff',
            oName: session.o.name,
            oColor: session.o.color || '#ffffff'
        });
    }, [session]);

    const handleFormChange = (e) => {
        const newInput = {...formData, [e.target.name]: e.target.value}
        console.log(newInput)
        setFormData(newInput)
    };

    const handleSave = (e) => {

        const updatedSession = {...session};

        updatedSession.x.name = formData.xName;
        updatedSession.x.color = formData.xColor;
        updatedSession.o.name = formData.oName;
        updatedSession.o.color = formData.oColor;

        document.documentElement.style.setProperty('--x-color', updatedSession.x.color)
        document.documentElement.style.setProperty('--o-color', updatedSession.o.color)

        setSession(updatedSession);
        setDisplay('hide');
        setFormData({
            xName: session.x.name,
            xColor: session.x.color || '#ffffff',
            oName: session.o.name,
            oColor: session.o.color || '#ffffff'
        });
    };


  return (
  <div className={`player-edit-overlay ${display}`}>

        <button className='btn' id='btn-close-form' onClick={() => setDisplay('hide')}>X</button>

        {session.players === 2 ?
            <div className='two-player-form flex'>
                <div className='x-edit flex'>
                    <h2>X</h2>
                    <input type='text' name='xName' value={formData.xName} onChange={handleFormChange} />
                    <input type='color' name='xColor' value={formData.xColor} onChange={handleFormChange} />

                </div>

                <div className='o-edit flex'>
                    <h2>O</h2>
                    <input type='text'  name='oName'value={formData.oName} onChange={handleFormChange} />      
                    <input type='color' name='oColor' value={formData.oColor} onChange={handleFormChange} />

                </div>
            </div> :

            <div className='one-player-form flex'>
                <div className='x-edit flex'>
                    <h2>X</h2>
                    <input type='text' name='xName' value={formData.xName} onChange={handleFormChange} />
                    <input type='color' name='xColor' value={formData.xColor} onChange={handleFormChange} />

                </div>
                <div className='o-edit flex'>
                    <h2>O - {session.o.name}</h2>
                    <input type='color' name='oColor' value={formData.oColor} onChange={handleFormChange} />

                </div>
            </div>
        }




        <button className='btn' id='btn-save-form' onClick={handleSave}>save</button>

    </div>
  )
}

export default PlayerEdit
