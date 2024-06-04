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

        <button className='btn' id='btn-close-form' onClick={() => setDisplay('hide')}>
            <svg xmlns="http://www.w3.org/2000/svg" width='1em' height='1em' viewBox="0 0 384 512"><path d="M342.6 150.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L192 210.7 86.6 105.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L146.7 256 41.4 361.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L192 301.3 297.4 406.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L237.3 256 342.6 150.6z"/></svg>
        </button>

        {session.players === 2 ?
            <div className='two-player-form flex'>
                <div className='x-edit flex'>
                    <h2><svg xmlns="http://www.w3.org/2000/svg" width='1em' height='1em' viewBox="0 0 384 512"><path d="M342.6 150.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L192 210.7 86.6 105.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L146.7 256 41.4 361.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L192 301.3 297.4 406.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L237.3 256 342.6 150.6z"/></svg>
                    </h2>
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
