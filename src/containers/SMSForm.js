import React, { Component } from 'react';
import SMSForm from './SMSForm';

class SMSForm extends Component {
    state = {}
    render() { 
        return (
            <form>
                <div>
                <label htmlFor="to">To:</label>
                <input
                    type="tel"
                    name="to"
                    id="to"
                />
                </div>
                <div>
                <label htmlFor="body">Body:</label>
                <textarea name="body" id="body"/>
                </div>
                <button type="submit">
                Send message
                </button>
            </form>
        );
    }
}
 
export default SMSForm;