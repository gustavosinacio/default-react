const preCommit = arr => arr.join(' && ')
const postCommit = arr => arr.join(' && ')


module.exports = {
  "hooks": {
    "pre-commit": preCommit([
      "echo '--------------------------------------------|'",
      "echo \"\n---  \\e[1m\\033[32mPre-commit =>\\e[0m executes: \\e[4m\\033[33mlint staged\\e[0m ---|\n\"",
      "lint-staged"

    ]),
    "post-commit": postCommit([
      "echo '--------------------------------------------|'",
    ]),
    "pre-push": "echo \"\n---  \\e[1m\\033[34mPre-push =>\\e[0m executes: \\e[4m\\033[33mempty\\e[0m ---\n\""
  }
}