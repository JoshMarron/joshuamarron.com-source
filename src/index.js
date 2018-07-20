import '../css/main';
import { Component } from 'preact';

import { Header } from "./header";
import { Bio } from "./bio";

export default class App extends Component {
    render() {
        return (
            <div>
                <Header />
                <Bio />
            </div>
        );
    }
}
