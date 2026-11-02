# Website Theme

This part of README.md contains information about how to style this website as to keep consistent. It also serves as a guide for an agent to reference.

<theme>This website is B&W minimal with Unix themed elements</theme>

## Color Palette
- Headers: white #fff
- Paragraph text: #999 (light-grey)
- Background: #000
- Unix value text i.e "thing": #f00
- Unix text: #fff

## Background Images

<directions>The background images should be set to a low opacity and elements should be put above them. Set the z layer as far back as possible.</directions>

<link href="./src/images/b&w_bg_(x).jpg"> Reference each image number to "x" respectively.
  
<example>"href="./src/images/b&w_bg_1.jpg" for use of the first background.</example>

## Unix Theme

I will display some examples of the type of theme I want to implement here.

### Example 1

Class themed biography section.

```
# who is this guy
class
  John Doe:
  school  = "RPI '30"
  major   = ["ITWS", "CSE"]
  focus   = "Machine Learning"
  def interests(self):
    return [
      "ml & computer vision",
      "full-stack builds",
      "late-night debugging",
      "dogs > screens",
    ]
```
### Another Example

This could be a built in terminal at the bottom of the website that a user could interact with.

```
visitor@terminal.pachrijam.dev:~$
```
# Font Usage

For code text: use JetBrains Mono else consult below
```
  /* Lab design system */
  --lab-bg: #060606;
  --lab-surface: #0a0a0a;
  --lab-card: #0d0d0d;
  --lab-border: rgba(255, 255, 255, 0.06);
  --lab-accent: #e0e0e0;
  --lab-accent-dim: rgba(255, 255, 255, 0.04);
  --lab-accent-glow: rgba(255, 255, 255, 0.08);
  --lab-red: #c03030;
  --lab-red-dim: rgba(192, 48, 48, 0.08);
  --lab-text: #888888;
  --lab-heading: #f0f0f0;
  --lab-muted: #555555;
  --lab-white: #ffffff;
  --lab-mono: 'JetBrains Mono', 'Fira Code', 'SF Mono', monospace;
  --lab-sans: 'Inter', 'Segoe UI', system-ui, sans-serif;
```

