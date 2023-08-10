
import { RulesCont } from '../rules/style/style'
import { GameHeader } from './gameStyles/game'
import { BtnGame } from '../../components/styled/GlobalButtonGame'
import MainBoard from './MainBoard'

function Game() {
  return (
    <RulesCont>
        <GameHeader>
            <div>
                <BtnGame>menu</BtnGame>
            </div>
<svg width="58px" height="61px" viewBox="0 0 58 61" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink">
    <title>logo</title>
    <g id="Designs" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
        <g id="assets" transform="translate(-432.000000, -742.000000)">
            <g id="Group-24" transform="translate(211.000000, 160.000000)">
                <g id="logo" transform="translate(221.000000, 582.000000)">
                    <g id="Group-23" fill="#000000">
                        <circle id="Oval-Copy-47" cx="13" cy="13" r="13"></circle>
                        <circle id="Oval-Copy-51" cx="45" cy="13" r="13"></circle>
                        <circle id="Oval-Copy-53" cx="13" cy="45" r="13"></circle>
                        <circle id="Oval-Copy-52" cx="45" cy="45" r="13"></circle>
                    </g>
                    <g id="Group-23-Copy" transform="translate(0.000000, 3.000000)" fill="#000000">
                        <circle id="Oval-Copy-47" cx="13" cy="13" r="13"></circle>
                        <circle id="Oval-Copy-51" cx="45" cy="13" r="13"></circle>
                        <circle id="Oval-Copy-53" cx="13" cy="45" r="13"></circle>
                        <circle id="Oval-Copy-52" cx="45" cy="45" r="13"></circle>
                    </g>
                    <circle id="Oval-Copy-11" fill="#FD6687" cx="13" cy="13" r="10"></circle>
                    <circle id="Oval-Copy-25" fill="#FD6687" cx="45" cy="45" r="10"></circle>
                    <circle id="Oval-Copy-23" fill="#FFCE67" cx="45" cy="13" r="10"></circle>
                    <circle id="Oval-Copy-24" fill="#FFCE67" cx="13" cy="45" r="10"></circle>
                </g>
            </g>
        </g>
    </g>
</svg>
<div>
<BtnGame>Restart</BtnGame>
</div>
        </GameHeader>
        <MainBoard />
    </RulesCont>
  )
}

export default Game