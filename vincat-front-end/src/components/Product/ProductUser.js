import React,{Component} from 'react';
import {CardGroup, Container, Modal} from "react-bootstrap";
import axios from 'axios';
import {Button, ButtonToolbar, Card, Col, Form, Row} from "react-bootstrap";
import { connect } from 'react-redux';
import Nav from "react-bootstrap/Nav";
import {LinkContainer} from "react-router-bootstrap";
import stars from "../../assets/stars.png";
import CardBody from "reactstrap/es/CardBody";
import CommentForm from "./CommentForm";
import CommentPro from "./CommentPro";
import { Redirect } from 'react-router';



class ProductUser extends Component{
    constructor(props) {
        super(props);
        this.state = {
            person: [],
            rating: 0,
            show: 'false',
            comments: 'sin comentarios',
            image: 'null',
            redirect: false
        }

        this.handleClick=this.handleClick.bind(this);
        this.handleClose = this.handleClose.bind(this);
        this.handleChange = this.handleChange.bind(this);
        this.handleFormSubmitReport = this.handleFormSubmitReport.bind(this);
        this.handleFormSubmitDelete = this.handleFormSubmitDelete.bind(this);
    }
    componentDidMount() {

        axios.get(`https://vnct01.herokuapp.com/users/${this.props.userInfo.id}`)
            .then(res => {
                const person = res.data;
                this.setState({ person });
            })
        axios.get(`https://vnct01.herokuapp.com/users/userRating?id=${this.props.userInfo.id}`)
            .then(res => {
                const rating = res.data;
                if(rating == null)
                {
                    return;
                }
                this.setState({rating});
            })
        axios.get(`https://vnct01.herokuapp.com/users/getRatings?id=${this.props.userInfo.id}&page=1`)
            .then(res => {
                this.setState({
                    comments: res.data.map((comments)=>
                        <CommentPro info={
                            {
                                rating: comments.rating,
                                message: comments.comment,
                            }
                        }/>
                    )
                });
            })

    }
    handleChange(e){
        this.setState({
            [e.target.name]: e.target.value
        });

    }
    handleFormSubmitDelete(e){
        e.preventDefault();



        axios.delete(`https://vnct01.herokuapp.com/users/${this.props.userInfo.id}?user_email=${this.props.loginAccountInfo.accountInfo}&user_token=${this.props.loginAccountInfo.key}`
        ).then(res => {
            this.setState({valid: "nan", isLoading: false, validRegister: true})

        }).catch(error => {
            this.setState({valid: error.response.data , isLoading: false})
            console.log(error.response);
        });
        this.setState({redirect: true});

    }
    handleFormSubmitReport(e){
        e.preventDefault();

        const reports = {body: this.state.report,
            reportable_id: this.props.userInfo.id,
            reportable_type:"User"
        };
        console.log(reports);
        axios.post(`https://vnct01.herokuapp.com/reports?user_email=${this.props.loginAccountInfo.accountInfo}&user_token=${this.props.loginAccountInfo.key}`, {reports}
        ).then(res => {
            this.setState({valid: "nan", isLoading: false, validRegister: true})
            console.log(res.data);
        }).catch(error => {
            this.setState({valid: error.response.data , isLoading: false})
            console.log(error.response);
        });

        this.setState({ show: 'false' });
    }
    handleClick(id){

        if(this.props.loginAccountInfo) {
            if(id ==1)
            {
                this.props.addProductToCart(this.state.product)
            }
            this.setState({ show: id });
            console.log(this.state.product,'selectedProduct')
        }
        else
        {
            this.setState({ show: id });
        }

    }
    handleClose(id) {
        this.setState({ show: 'false' });
    }
    render(){
        if(this.state.person.images != undefined)
        {
            this.state.image = this.state.person.images[0].photo;
        }
        if (this.state.redirect) {
            return (
                <Container>
                    El usuario ha sido eliminado
                </Container>
            );
        }
        if(this.props.loginAccountInfo.role == 'admin'){
            return(
                <Container style={{display: 'flex',  justifyContent:'center', alignItems:'center', height: '80vh'}}>
                    <Modal show={this.state.show == '2'} onHide={this.handleClose}>
                        <Modal.Header closeButton>
                            <Modal.Title>Eliminar al usuario.</Modal.Title>
                        </Modal.Header>
                        <Form className="justify-content-md-center" onSubmit={this.handleFormSubmitDelete}>
                            <Modal.Body>

                                ¿Seguro que quiere eliminar el usuario?

                            </Modal.Body>
                            <Modal.Footer>
                                <Button variant="secondary" onClick={this.handleClose}>Cerrar</Button>
                                <Button size="md" className="btn btn-primary"  type="submit">Eliminar el usuario</Button>

                            </Modal.Footer>
                        </Form>
                    </Modal>
                    <Row className="justify-content-md-center">
                        <Col md="auto">
                            <CardGroup>
                                <Card className="text-center"  >

                                    <Card.Header>
                                        <Row>
                                            <div className="profile-img">
                                                <img
                                                    src={this.state.image} alt="" style={{width: 200, height: 200, borderRadius: 200/ 2}} />
                                            </div>

                                            <div className="profile-head">
                                                <h5>
                                                    {this.state.person.name}
                                                </h5>
                                                <p className="proile-rating"><img src={stars}/> <span>{this.state.rating}/5</span></p>
                                                <Button type="button" onClick={() => this.handleClick('2')} size="sm">Eliminar el usuario </Button>
                                            </div>
                                        </Row>
                                    </Card.Header>
                                    <Card.Body >
                                    </Card.Body>

                                    <div className="row">
                                        <div className="col-md-6">
                                            <label>Usuario</label>
                                        </div>
                                        <div className="col-md-6">
                                            <p>{this.state.person.username}</p>
                                        </div>
                                    </div>
                                    <div className="row">
                                        <div className="col-md-6">
                                            <label>Nombre</label>
                                        </div>
                                        <div className="col-md-6">
                                            <p>{this.state.person.name}</p>
                                        </div>
                                    </div>
                                    <div className="row">
                                        <div className="col-md-6">
                                            <label>Email</label>
                                        </div>
                                        <div className="col-md-6">
                                            <p>{this.state.person.email}</p>
                                        </div>
                                    </div>

                                    <div className="row">
                                        <div className="col-md-6">
                                            <label>Descripcion</label>
                                        </div>
                                        <div className="col-md-6">
                                            <p>{this.state.person.description}</p>
                                        </div>
                                    </div>


                                </Card>

                                <Card>
                                    <Card.Header className="text-center">
                                        <CommentForm type= {"User"} product={this.props.userInfo} key1={this.props.loginAccountInfo.key} email={this.props.loginAccountInfo.accountInfo} />
                                    </Card.Header>
                                    <CardBody>
                                        {this.state.comments}
                                    </CardBody>
                                </Card>
                            </CardGroup>
                        </Col>
                    </Row>
                </Container>
            );
        }
        return(
            <Container style={{display: 'flex',  justifyContent:'center', alignItems:'center', height: '80vh'}}>
                <Modal show={this.state.show == '2'} onHide={this.handleClose}>
                    <Modal.Header closeButton>
                        <Modal.Title>Reportar al usuario.</Modal.Title>
                    </Modal.Header>
                    <Form className="justify-content-md-center" onSubmit={this.handleFormSubmitReport}>
                        <Modal.Body>

                            <Form.Control as="textarea" rows={3} onChange={this.handleChange}  placeholder="Tu reporte*" name="report" >
                            </Form.Control>

                        </Modal.Body>
                        <Modal.Footer>
                            <Button variant="secondary" onClick={this.handleClose}>Cerrar</Button>
                            <Button size="md" className="btn btn-primary"  type="submit">Reportar el usuario</Button>

                        </Modal.Footer>
                    </Form>
                </Modal>
                <Row className="justify-content-md-center">
                    <Col md="auto">
                     <CardGroup>
                        <Card className="text-center"  >

                            <Card.Header>
                                <Row>
                                    <div className="profile-img">
                                        <img
                                            src={this.state.image} alt="" style={{width: 200, height: 200, borderRadius: 200/ 2}} />
                                    </div>

                                    <div className="profile-head">
                                        <h5>
                                            {this.state.person.name}
                                        </h5>
                                        <p className="proile-rating"><img src={stars}/> <span>{this.state.rating}/5</span></p>
                                        <Button type="button" onClick={() => this.handleClick('2')} size="sm">Reportar el usuario </Button>
                                    </div>
                                </Row>
                            </Card.Header>
                            <Card.Body >
                            </Card.Body>

                            <div className="row">
                                <div className="col-md-6">
                                    <label>Usuario</label>
                                </div>
                                <div className="col-md-6">
                                    <p>{this.state.person.username}</p>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-md-6">
                                    <label>Nombre</label>
                                </div>
                                <div className="col-md-6">
                                    <p>{this.state.person.name}</p>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-md-6">
                                    <label>Email</label>
                                </div>
                                <div className="col-md-6">
                                    <p>{this.state.person.email}</p>
                                </div>
                            </div>

                            <div className="row">
                            <div className="col-md-6">
                                <label>Descripcion</label>
                            </div>
                            <div className="col-md-6">
                                <p>{this.state.person.description}</p>
                            </div>
                        </div>


                        </Card>

                       <Card>
                           <Card.Header className="text-center">
                               <CommentForm type= {"User"} product={this.props.userInfo} key1={this.props.loginAccountInfo.key} email={this.props.loginAccountInfo.accountInfo} />
                           </Card.Header>
                           <CardBody>
                               {this.state.comments}
                           </CardBody>
                       </Card>
                    </CardGroup>
                    </Col>
                </Row>
            </Container>
        );
    }
}
const mapStateToProps = (state) => {
    return {userInfo: state.userInfo,
        loginAccountInfo: state.loginAccountInfo};
};
export default connect(mapStateToProps)(ProductUser);
