# Git-auto-pull

## What is it ?


In short, git-auto-pull is a little javascript utility to automatically do a 'git pull'  on a server when something new is pushed to the git repository.


## Usage

#### Get it

```
npm install git-auto-pull
```

or

```
git clone https://github.com/Keenpoint/git-auto-pull
```

#### Prepare it

You should create a git post-receive hook (see https://git-scm.com/book/it/v2/Customizing-Git-Git-Hooks) in the hook directory of your git repository. It could be like this:

```sh
#!/bin/sh

curl here.the.ip.of.the.machine:1337
```
`here.the.ip.of.the.machine` being the ip of the machine containing the project to update and 1337 is the port listened by git-auto-pull (by default).

Or if you have multiple branches and you just want to update the server when a change occurs on master:

```sh
#!/bin/bash
while read oldrev newrev refname
do
    branch=$(git rev-parse --symbolic --abbrev-ref $refname)
    if [ "master" == "$branch" ]; then
        curl here.the.ip.of.the.machine:1337
    fi
done
```
(As found on: http://stackoverflow.com/questions/7351551/writing-a-git-post-receive-hook-to-deal-with-a-specific-branch by Pauljz)

#### Run it

```sh
node git-auto-pull.js relative/Path/To/Your/Project [cmds]
```

[**cmds**] : Optionnal parameters.
You can add some commands to be executed in the given order after the git pull.
The commands are executed from the given `relative/Path/To/Your/Project` project directory.

*Ex:*
```sh
node git-auto-pull.js ../myProject "gulp build"
```
Here, the script will execute git pull in your project and then build it with gulp.

## License

This project is licensed under the terms of the MIT license.

