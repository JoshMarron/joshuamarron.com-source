import '../css/main';
import { Component } from 'preact';

import { Header } from "./header";
import { Bio } from "./bio";
import { Cv } from "./cv";

export default class App extends Component {
    render() {
        return (
            <div>
                <Header />
                <div class="body-box">
                    <Bio />
                    <Cv />
                </div>
            </div>
        );
    }
}
