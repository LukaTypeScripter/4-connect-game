
import {
  MainRUlesWrapper,
  RulesCont,
  RulesHeaderTExt,
  RulesInside,
  RulesMain,
  SubHeader,
  SubText,
  Ruleswrap,
} from "./style/style";
import { useNavigate } from "react-router-dom";
function Rules() {
  const navigate = useNavigate();
  return (
    <RulesCont>
      <RulesMain>
        <RulesInside>
          <RulesHeaderTExt>RULES</RulesHeaderTExt>
          <MainRUlesWrapper>
            <div>
              <SubHeader>OBJECTIVE</SubHeader>
              <SubText>
                Be the first player to connect 4 of the same colored discs in a
                row (either vertically, horizontally, or diagonally).
              </SubText>
            </div>
            <div>
              <SubHeader>HOW TO PLAY</SubHeader>
              <Ruleswrap>
                <h4>1</h4>
                <span>Red goes first in the first game.</span>
              </Ruleswrap>
              <Ruleswrap>
                <h4>2</h4>
                <span>
                  Players must alternate turns, and only one disc can be dropped
                  in each turn.
                </span>
              </Ruleswrap>
              <Ruleswrap>
                <h4>3</h4>
                <span>
                  The game ends when there is a 4-in-a-row or a stalemate.
                </span>
              </Ruleswrap>
              <Ruleswrap>
                <h4>4</h4>
                <span>
                  The starter of the previous game goes second on the next game.
                </span>
              </Ruleswrap>
            </div>

            <svg
              width="70px"
              height="75px"
              viewBox="0 0 70 75"
              version="1.1"
              xmlns="http://www.w3.org/2000/svg"
              xmlnsXlink="http://www.w3.org/1999/xlink"
              onClick={() => navigate("/")}
            >
              <title>icon-check</title>
              <g
                id="Designs"
                stroke="none"
                stroke-width="1"
                fill="none"
                fill-rule="evenodd"
              >
                <g id="icon-check">
                  <circle
                    id="Oval-Copy-37"
                    fill="#000000"
                    cx="35"
                    cy="35"
                    r="35"
                  ></circle>
                  <circle
                    id="Oval-Copy-38"
                    fill="#000000"
                    cx="35"
                    cy="40"
                    r="35"
                  ></circle>
                  <circle
                    id="Oval-Copy-39"
                    fill="#FD6687"
                    cx="35"
                    cy="35"
                    r="32"
                  ></circle>
                  <polyline
                    id="Path"
                    stroke="#FFFFFF"
                    stroke-width="3"
                    points="20 34.5819497 30.2640104 44.84596 50.1099704 25"
                  ></polyline>
                </g>
              </g>
            </svg>
          </MainRUlesWrapper>
        </RulesInside>
      </RulesMain>
    </RulesCont>
  );
}

export default Rules;
