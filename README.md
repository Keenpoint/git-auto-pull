# Git-auto-pull

## What is it ?

Git-auto-pull is a little javascript utility to automatically do a `git pull`  on a server when something new is pushed to the git repository.


## Usage

#### Prepare it

You should have a git post-receive hook (see https://git-scm.com/book/it/v2/Customizing-Git-Git-Hooks)  in the hook directory of your git repository. It could be like this :

```sh
#!/bin/sh

curl here.the.ip.of.the.machine:1337
```
where 1337 listened by the auto-pull.


#### Run it

```
node git-auto-pull.js relative/Path/To/Git/Directory
```

## License

This project is licensed under the terms of the MIT license.
