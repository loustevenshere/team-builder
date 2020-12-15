// - [ ] In `Form.js` build out your markup.
// - [ ] Build inputs for `name`, `email` and `role` (backend engineer, frontend engineer, designer, etc. Use your imagination).
// - [ ] You will have to decide which component is responsible for maintaining the _state_ of the form (`Form` itself, or its parent `App`). Each approach has advantages and disadvantages.
// - [ ] Render your `Form` component in `App`. The `App` component should hand down through props any callback(s) needed for `Form` to do its job (adding new members to your team members state on submit).

import React, { useState } from 'react';
 
function Form({team, change, submit}) {

    // const onSubmit = evt => {
    //     evt.preventDefault()
    //     console.log(evt)
    // };

    // const onInputChange = evt => {
    //     setTeam({
    //         ...team,
    //         [evt.target.name]: evt.target.value,
    //     })
    // };
    return (
        <div>
            <form onSubmit={submit}>
                <label htmlFor='name'>
                    Name:
                    <input onChange={change} name='name' type='text' value={team.name} />
                </label>
                <label htmlFor='email'>
                    Email:
                    <input onChange={change} name='email' type='email' value={team.email} />
                </label>
                <label htmlFor='role'>
                    Role:
                    <input onChange={change} name='role' type='text' value={team.role} />
                </label>
                <button>Submit</button>
            </form>
        </div>
    )
}

export default Form;