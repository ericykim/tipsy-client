import React, { useState } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';

const LoginModal = ({toggle, modal}) => {
    return (
        <div>
            <Modal isOpen={modal} toggle={toggle}>
                <ModalHeader toggle={toggle}>Enjoying Tipsy so far?</ModalHeader>
                <ModalBody>
                    Looks like you are trying to access some of Tipsy's awesome features. Login in
                    or make an account to use them!
                </ModalBody>
                <ModalFooter>
                    <Link to={`/login`} style={{ textDecoration: 'none' }}>
                        <Button color='primary' onClick={toggle}>
                            Login
                        </Button>{' '}
                    </Link>
                    <Link to={`/signup`} style={{ textDecoration: 'none' }}>
                        <Button color='secondary' onClick={toggle}>
                            Signup
                        </Button>
                    </Link>
                </ModalFooter>
            </Modal>
        </div>
    );
};

export default LoginModal;
