import '../css/main';
import { Component } from 'preact';

import { Header } from "./header.js";

export default class App extends Component {
    render() {
        return (
            <Header />
        );
    }
}
