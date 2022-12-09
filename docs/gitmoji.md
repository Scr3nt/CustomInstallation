# Initialisation du repo

```
echo "# CustomInstallation" >> README.md
git init
git add README.md
```

```
npm i -g gitmoji-cli
```

```
gitmoji -g
? Enable automatic "git add ." Yes
? Select how emojis should be used in commits :smile:
? Enable scope prompt Yes
? Set gitmojis api url https://gitmoji.dev/api/gitmojis
```

```
gitmoji -c
✔ Gitmojis fetched successfully, these are the new emojis:
? Choose a gitmoji: 🎉  - Begin a project.
? Enter the scope of current changes:
? Enter the commit title [24/48]: Creation & Configuration
? Enter the commit message:
```

```
git branch -M main
git remote add origin git@github.com:Scr3nt/CustomInstallation.git
git push -u origin main
```

# gitmoji seul

```
npm i -g gitmoji-cli
```

```
gitmoji -g
? Enable automatic "git add ." Yes
? Select how emojis should be used in commits :smile:
? Enable scope prompt Yes
? Set gitmojis api url https://gitmoji.dev/api/gitmojis
```

```
gitmoji -c
? Choose a gitmoji: ➕  - Add a dependency.
? Enter the scope of current changes:
? Enter the commit title [15/48]: Add Expo Router
? Enter the commit message:
```
