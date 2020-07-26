viranchee

### Next - Chakra app

Get started quickly in React, Typescript, Chakra-UI, ESLint and Prettier

```bash
react-app() {
  CODE_EDITOR=code #Replace with webstorm
  CONFIG_FILES_PATH=~/Code/jsconfig

  # FAILSAFE: Add Default Configs ESLint, Prettier, TSConfig files. Remove this if files are present
  touch $CONFIG_FILES_PATH/.prettierrc
  touch $CONFIG_FILES_PATH/.eslintrc.json
  touch $CONFIG_FILES_PATH/tsconfig.json

  # Create-Next-App
  yarn create next-app --example with-chakra-ui $1
  cd $1

  echo "yarn.lock" >> .gitignore #Ignore Yarn file
  echo $1 > README.md # Clear Readme file, replace with Project Name


  for file in $CONFIG_FILES_PATH/{.*,*}; cp $file .
  # Rename JS to TSX
  for file in src/pages/*.js; mv $file ${file%.js}.tsx
  mkdir src/hooks

  # Git remove yarn.lock, commit git
  git update-index --assume-unchanged yarn.lock
  git add --all
  git commit -a -m "Add Configs, use TS"
  git branch -m master main

  # User Tasks
  echo "Add this in Package.JSON Scripts"
  echo '
    "lint": "eslint . --ext .ts",
    "lint-and-fix": "eslint . --ext .ts --fix",
    "lint-debug": "eslint . --ext .ts --debug"
  '

  # Let the user code faster
  $CODE_EDITOR .

  # YARN Install some Dependencies
  yarn add -D typescript @types/node eslint
  yarn add -D eslint-plugin-react@latest @typescript-eslint/eslint-plugin@latest @typescript-eslint/parser@latest

  git add package.json
  git commit -v -a --no-edit --amend

  yarn dev
}
```
