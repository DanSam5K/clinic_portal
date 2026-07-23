---
description: Create a commit message by analysing git diffs.
allowed_tools: Bash(git status:*), Bash(git diff --staged), Bash(git commit:*)
---

## Your Task
Analyze above staged git changes and create a commit message use present tense and explain "why" something has change, not just "what" has changed.

## Run These commands:
```bash
git status
git diff --staged
```

## Commit Types With Emojis:
Only use the following emojis:

- ✨ `feat:` - New Feature
- 🐛 `fix:` - Bug fix
- 🔨 `refactor:` - Refactoring code
- 📝 `docs:` - Documentation
- 🎨 `style:` - Styling/formatting
- ✅ `test:` - Tests
- ⚡️ `perf:` - Performance

## Format
Use the following format for making the commit message:

```
<emoji> <type>: <concise_description>
<optional_body_explaining_why>
```

## Output
1. Show summary of changes currently staged
2. Propose commit message with appropriate emoji
3. Ask for confirmation before committing

DO NOT auto-commit - wait for user approval, and only commit if the user says so.