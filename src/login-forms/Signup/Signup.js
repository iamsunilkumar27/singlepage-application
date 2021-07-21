import { PureComponent } from "react";

class Signup extends PureComponent {
    constructor(props) {
        super(props);
        this.state =  {

        }
        this.handleSubmit = this.handleSubmit.bind(this);
    }
    handleSubmit(event) {
        console.log('form submitted.......');
        event.preventDefault();
    }

    render() {

        return (
            <div className='signin h-100'>
                <div className=''>
                    <div className='container '>
                        <div className='row justify-content-center'>
                            <form className="row g-3">
                                <div className="col-md-12">
                                    <label htmlFor="inputEmail4" className="form-label">Email</label>
                                    <input type="email" className="form-control" id="inputEmail4" />
                                </div>
                                <div className="col-md-12">
                                    <label htmlFor="inputEmail4" className="form-label">Pone No</label>
                                    <input type="text" pattern="[6789][0-9]{9}" title='Please Enter The Correct Number      ' className="form-control" id="inputEmail4" />
                                </div>
                                <div className="col-md-12">
                                    <label htmlFor="inputPassword4" className="form-label">Password</label>
                                    <input type="password" className="form-control" id="inputPassword4" />
                                </div>
                                <div className="col-12">
                                    <button type="submit" className="btn btn-primary" onClick={ this.handleSubmit }>Sign up</button>
                                </div>
                            </form>

                        </div>
                    </div>
                </div>
            </div>
        );
    }

}
export default Signup;