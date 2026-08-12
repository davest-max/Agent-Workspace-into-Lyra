# Lyra Design System (NiCE CXone)

The new design system that replaces **SOL** across all NiCE CXone surfaces. This project mirrors the Figma library *Lyra Foundations (Beta)* into a working, reusable folder of CSS, components, and HTML preview cards.

> **Status:** Beta. Lyra is the in-progress unification of CXone's many product UIs (Agent, AI Studio, WEM, Suite Shell, etc.). Pre-Lyra surfaces use **SOL** (Open Sans, denser type). Lyra moves the suite to **Inter**, a richer color token model, and a unified shell.

---

## Sources

Precedence (lowest → highest): **Lyra Storybook** (base) → **`Lyra Foundations (V1).fig`** (overrides Storybook) → **`davidbauerjr991/lyra-ui`** (overrides both — canonical for tokens).

| Source | What it is | Precedence | Where |
| --- | --- | --- | --- |
| Lyra Storybook | Published component reference / stories — the baseline spec for component APIs, variants, and behavior | Base | https://na1.dev.nice-incontact.com/sol/?path=/docs/introduction--docs&globals=theme:lyra |
| `Lyra Foundations (V1).fig` | Figma library of base + semantic tokens, type scale, sizes, effects, components, and full product mockups | Overrides Storybook | Figma file mounted as VFS during build |
| `davidbauerjr991/lyra-ui` | GitHub repo for the React implementation — **canonical source of truth for tokens.** `lyra-tokens.css` is synced verbatim from its `src/styles/lyra-tokens.css` | Overrides all | Connected — see `lyra-tokens.css` |

When two sources disagree: the repo wins over the Figma file, and the Figma file wins over Storybook.

### Component coverage & intentionally skipped families

The Figma kit reports **1655 "component families"**, but that count includes every per-screen instance tree and demo frame in the file. **590 genuine reusable component families are built** in `components/`. The remaining ~1065 are **intentionally skipped** because they are not reusable atoms:

- **Per-screen instance trees** — e.g. `Agent Top Navigation`, `Admin Headers`, `Agent Panel Tab`, `Applications` — full composed screens/regions, not components. Materializing them verbatim produces 100 KB–1.3 MB single files that bloat every consumer's bundle without adding a reusable API.
- **Icon-state wrappers** — e.g. `#ICONS_State`, `Agent-icons` — per-instance icon frames already covered by the materialized `Icon` component + `icon-data.js`.
- **Pure example/demo frames** — the `A.I.-Patterns` "place your example" frames and similar, which the import guidance says to skip.

Every reusable component page (Forms/Inputs, Data-Display, Overlays, Messaging, Navigation, Suite-Shell, Containers, charts, the MUI base set, breadcrumbs, sidebar/nav) has been materialized. If a specific skipped family is needed as a real component, name it and it'll be built individually.

The Figma file contains 25 pages; the most important for this system are: **Cover, Colors, Typography, Sizes, Effects, Forms-Inputs, Navigation, Containers, Data-Display-Management, Overlays, Messaging, Suite-Shell, Templates, Icons-Images, Products-examples, Product-Mockups**.

---

## Products represented

NiCE **CXone** is a large CCaaS (contact-center-as-a-service) suite. Lyra ships a **Suite Shell** that hosts every product and a token system every app consumes. Surfaces seen in the Figma file:

- **CXone Agent** — the agent desktop. Customer card, contact history, channel switcher, transfer outcomes, dialer.
- **AI Studio** — bot/intent builder. Tree view + content canvas with adaptive cards.
- **WEM** (Workforce Engagement Management) — schedules, RTA summary, project timelines.
- **Suite Shell** — top bar, app switcher, profile menu, services tray. The chrome around every product.

Lyra is foundations-first; product teams compose using the tokens + UI-kit components.

---

## Index

| File | Purpose |
| --- | --- |
| `README.md` | This file. Foundations + content + visual + iconography rules. |
| `lyra-ui-reference.md` | **Full mirror of the `davidbauerjr991/lyra-ui` repo** — complete component export catalog, install/setup instructions, and the entire `CLAUDE.md`/`CONTRIBUTING.md` authoring rulebook + `PageHeader` usage note. |
| `lyra-ui-sections.html` | Visual reference — every repo category paired with a rendered preview beside its instructions. |
| `github.md` | Repo-sync receipt (repo, branch, last-sync commit, screen map). |
| `SKILL.md` | Agent skill manifest (Claude Code compatible). |
| `styles.css` | Root entry point — `@import`s `colors_and_type.css`. Link this one file. |
| `lyra-tokens.css` | **Canonical tokens, synced verbatim from `lyra-ui`'s `src/styles/lyra-tokens.css`** — light + dark `--lyra-color-*`, radius, spacing, border-width, and the `.lyra-heading-*` / `.lyra-body-*` / `.lyra-label` type classes. Re-sync from the repo; don't hand-edit values. |
| `colors_and_type.css` | Imports `lyra-tokens.css`, then defines the legacy `--color-*` / `--lyra-brand-*` aliases (now resolving to the real tokens above) plus elevation and the `--text-*` shorthand. |
| `assets/` | Logos (official NiCE+CXone lockups, smile mark), icons, brand SVGs. |
| `preview/` | One HTML card per concept for the Design System tab. |
| `ui_kits/cxone-agent/` | Agent desktop UI kit (interactive) + login screen. |
| `ui_kits/wem-lyra/` | Suite-shell reference screens (RTA, Employees, Recommended Actions, Simulator, App switcher). |
| `fonts/` | Inter (regular + italic) and Cascadia Code (regular + italic) Variable TTFs, self-hosted. |
| `components/` | Materialized Figma components (`.jsx` + `.d.ts`) + `fig-tokens.css` / `fig-typography.css`. |

### Components (materialized from Figma, batches 1–3)

Batch 1: AlertErrorFill2, AlertInfoFill, AlertInfoOutline4, AlertSuccessFill, AlertWarningFill, Badge, ButtonBase, ButtonBaseIcon, ButtonIconButtonBase, ButtonTertiaryBase, CheckboxBase, DropdownOpen, FilterChip, FilterValue, GeneralPlaceholder, Help, InformationTooltip, InlineNotification, InputBase, InputChevronDownSmSmall, SentimentHappy3, SystemCloseSmall5, SystemMenu2, SystemMenu3, TooltipLight, User, Icon.

Batch 2: DropDown, DropdownItems, DropdownTray, DropdownFooter, GridCell, GridHeader, GridRow, ColumnHeaders, AccordionBase, AccordionSection, AccordionSectionClosed, Toast, TagBase, ChatBubbleQuestion, CalendarDay, ErrorIndicator, Search, TextPlain, EmptyStates, LinkText, Chip, Notification, Tooltip6, Selectors5, ActionCheck, AlertInfoFill2, AlertSuccessFill2, AlertWarningFill2, Checkbox5, CheckboxBase2, CheckboxLabelSimple, Close2, ControlCheck, ControlDash, DeclinedBig, ErrorBig2, ErrorSmall2, GeneralXClose, InputField3, KeyPreview, LoadingIcon2_, MessageError3, NavigationClose, NavigationPlus, NoItemsBig2, NoItemsSmall2, NoPermissionBig2, NoResultsBig2, NoResultsSmall2, PeopleSentimentNeutral, SpinnerLight, StandardButton5, GeneralPlaceholder2, GeneralPlaceholder3, GeneralPlaceholder5, InputChevronDownSmSmall2, InputChevronDownSmSmall4, plus empty-state / control-icon deps.

Batch 3: ActionButtons, ActionState, ActionsPanelHeader, AppSelector, AppsTitles, MetricBarInfo, MetricBarMulti, MetricBarSingle, TabsBaseNoDefaultDefault, SliderSegment, InputGenericOld, InputFieldTypes, InputButtons, ChartData, Browser, LinkExternal02, MenuBarActions, PortsInput, NewTab, ActionSearch4, TypedCursor, RedactedVariablesArray, TooltipDark, Applications, Applications2, MetricbarMetricStatic, MetricbarMetricMulti, MetricbarMetricSingle, MessageError5, InputBaseOld, Date, Time, User4, DropdownOpen2, DateTime2, Date3, Time3, Hide2, ArrowLeft, ArrowRight, Button3, Date4, NavigationPlus5, RightClickAction, ActionSettings3, IconTooltip2, InputTextAreaArray, ArrayRow, Search11, ChevronDown, Menu4.

> Import covers ~156 of 1655 families so far. Remaining families are materialized in subsequent batches (navigation, chat/AI, more metrics, and the icon library).

Batch 4: CheckboxLabel, ColumnDefault, GridRowBackground, GridCellTypes, InputBaseNumeric, InputFieldContent, InputField, Communication, Active, Failed, Pending, ColorTag2, GeneralPlaceholder4, InputChevronDownSmSmall3, InputDate2, InputTime2, InputEyeShow2, InputNumericStepper2, TagBase2, SentimentHappy2.

Batch 5: Cursor, DropdownHeader, DropdownTrayContents, EmptyCanvasPreview, General, GridColumn, GridPagination, MetricsBoxBase, ModalMessage, ModalMessage5, TabsBaseNoHoverDefault, TabsBaseYesDefaultDefault, TextAreaContent, NavigationArrowDown2, NavigationArrowUp2, DropdownMenuItems, Scroll, Selectors3, DropdownItemsDropdownItemNormalTrue, DropdownItemsDropdownItemSelectedTrue, BoxCursor, FieldSearch, ButtonTextLink2, GridHeader3, GridCell3, SystemChevronFirst, SystemChevronLast, SystemChevronRight, SystemMenu5, InputTypeState, InputContent, Error2, Error, Info, Warning2, Delete, Delete2, GeneralSlashCircle02, DragIcon2, ActionSearch3, ActionDrag, ActionEdit5, ActionDelete4, StandardButton6, GeneralPlaceholder9, Checkbox8, LinkText4, Chip3, ControlCheck3, ControlCheck4, ControlDash4.

> Import covers ~589 of 1655 families so far. Remaining families continue in subsequent batches (chat/AI, connectors, and the icon library).

Batch 29: Breadcrumbs2.

Batch 28: Toast3, ModalMessage3, EmbeddedMessage, EmbeddedMessage5, Success.

Batch 30 (Forms-Inputs): Slider2, InputContent, input/slider families.

Batch 27: Category, OverlayContainer, OverlayContainer3, SelectTime.

Batch 26: ChipGroup, ChipsPopover, FilterBar, Grid, GridCellTypes2, GridCell2, InputGeneric2_, Search2, ColumnDefault2, GridRowBackground2, Completed2, Failed2, Pending2, NA2, Menu5, LinkText2, Chip2, Checkbox6, InputSearch4, MessageError4, ControlCheck2, ControlDash2.

Batch 25: AppACD, AppIcons, AppAdapters, AppAdmin, AppAgent, AppAnalytics, AppCoaching, AppDashboard, AppMenu, AppMyZone, AppReporting, AppStudio, AppSupervisor, AppWFI, AppRow.

Batch 24: ActivityCategory, ActivityCategory1, Admin, Agent, SidebarItemExpanded2ndLevel2.

Batch 23: ActionButton, ActionProperties, ActionBin, ActionHelp, ActionSettings, Actions, ActionsPanel, ActionsPanelHeader2, ActionsList, AvatarStack, AlertSuccessOutline2, InputArray, Condition, InputTextArea2, Switch3, Numeric, Input7, UserPlus, Menu9, Dropdown2, ExpandTextArea, ImagesImage02, Toggle2, Toggle3, RadioVertical, Wait, ButtonTextLink, NotAvailable, SearchSm, NoneFound, UndoRedo, Pan, SideNavigation4, InputField8, TextArea2, SlideToggleGroup, Settings04, Variable, TextInput, NumericSelector, SplitDropdown, ActionChangeSize, Selectors2, InformationTooltip2, InputField9, SingleSelect, ActionSettings5, ScrollBar3.

Batch 22: AccordionTrigger, ACD, Action, Table, Tabs, IconLayoutDashboard, IconChevronUp, TableHeader3, TabsBase2.

Batch 21: Paper, ProgressCircular, Typography, AccordionSingle, Alert, ButtonGroup, List, LibraryInstanceSlot, ToggleSelectOffText, ToggleSelectOffIcon, ToggleSelectOnIcon.

Batch 20: Button, CheckBox, FormControlLabelCheckbox, FormLabel, IconButton, Menu, MenuList, Checkbox17, IconSquareDashed, DividerHorizontal, Hidden, RemoveBox, Hidden2.

Batch 19: InputFieldsOld, Marker, SelectComboboxRightDecoration, SelectLeftDecoration, AccessibilityInfo3, TextFormattingSearch3, ArrowsChevronDown4, Avatar2, Checkbox11, IconMinus, IconCheck.

Batch 18: ButtonGroupItem, ChartTitle20, InfoIcon, InfoIcon2, InputDecoration, MenuItem, ButtonGroup3, AlertInfoOutline3, IconCircleDashed2, IconCircleDashed3, Tooltip2, ActionCopy2, ChipDotGreen2.

Batch 17: BreadcrumbItem, BreadcrumbSeparator, Zoom, Breadcrumb, Breadcrumbs, IconEllipsis, IconChevronDown, IconChevronRight, IconSlash.

Batch 16: UserMenu, UserProfileSelector, XAxis, YAxis, YAxisLine, Avatar, AvatarGroup, Card, Divider, EmptyState, Avatar5, Content.

Batch 15: TagCount, TextElement, TextHyperlink, ToastInverse, ToggleSelect, ToggleSegment, Wizard, WizardSteps, CheckCircleBroken, MinusCircle, XCircle.

Batch 13: SidebarNavChild, SidebarNavGroup, SidebarNavParent, ToggleGroup, SystemChevronUp, SingleSelectDropdownRow, SlideToggleBase, SidebarNavPage, AlertSuccessFill6.

Batch 14: TabSections, TablePaginationBar, TableButton, TableCell, TabsBase, TableHeader, TextArea, WizardStep, DotsHorizontal2, Selectors, ActionPlaceholder, NavigationSortDescending, ActionFilter2, CheckboxToggle, ArrowsArrowUpDown, Label3, Validations, CodingDevelopmentMinus, SystemHelp2.

Batch 12: ScriptRightControlsPromotion, ScriptTitleName, SelectAllBar, SelectItemLabel, ShellbarAppDropdown, ShellbarAppName, ShellbarProfile, ShellbarService, ShellTopBar, TabBar, TabSections3, InputSearch5, Completed.

Batch 11: RadiobuttonLabelSimple, RightCornerAvailability, SaveState, SaveState2, ScriptModesMVP, ScriptRightControls, ScriptTitle, ScriptOptionsWorkspace, Slider, Tab, ToggleSwitch, Toolbar, SpinnerAppLatency, Dataflow03, LayoutGrid02, StandardButton7, ChannelVoice02, ActionSettings2, IconTooltip, NavigationArrowLeft3, NavigationArrowRight3, Cloud01, CloudCheck, CloudOff, CloudX, ObjectStatus, ObjectStatusInactive, TextInput2, Copy05, SquareArrow.

Batch 10: PropertyValue, QueryChipRemove, QueryChipFilter, QueryChipSegment, QueryFilter, QueryOperator, QueryValue, TabItem, Close3, Help2, SystemChevronDown3, MultimediaMegaphone, Badge5, NotificationCheck3.

Batch 9: PanelRowIcon, PanelRowTypeAction, PanelRowsCanvasWithErrors, PanelRowsEmpty, PopoverMenuRow, PortHover, PortsOutput, PropertySubheading, RadioGroup, TableRow, TextField, Placeholder2, InlineNotification2, Tooltip5, Switch2, ConnectorOutput, Checkbox13, Native2, Icon2, RemoveRedEyeFilled, Arrows3TwoElbow, Arrows1Straight, Arrows2OneElbow, Arrow2, StarSharp.

Batch 8: NativeBrowserScroll, NavSelector, NavigationPanel, PanelRowSubheading, PanelRowSubheadingLevels, PanelRowAPI, PanelRowTypeAPI, RadioButton, RadioButton2, BaseRadioButton, ScrollBar, Select, SideNavigation, Spinner, IconsHelp, ChevronDown5, IconButtonTooltip, ArrowDropDownFilled, ArrowDropUpFilled, FormHelperText, MailOutlineFilled, ArrowsChevronsUpDown, InputFields, Explore, SidebarGroupLabel, NotificationCheck, Pinned, Observability, Saved, CursorsLoaderCircle2, Shapes, Get, AccessibilityInfo, TextFormattingSearch, ArrowsChevronDown2, CognigyOriginalsCognigyAILogo, SidebarItemExpanded2ndLevel, SidebarMiniButton, CodingDevelopmentCircleDashed, CursorsPlus.

Batch 7: MainBarAppsTitles, MainBarIcons, MainBarUserMenu, MenuBarAnnotation, MenuBarConnectors, MenuMenuItem, NavItem, PageHeader, Pagination, Popover, Radio, Applications3, AppWFM, PlatformHelp, KeyPreview2, Icons, Button17, SelectCombobox2, NavigationArrowRight, NavigationArrowLeft, NavigationArrowFirstPage2, IconButton2, IconSquareDashed3, ActionEdit.

Batch 6: InputSize, ItemLabel, L34, Legend, LockedState, MainBarIcon, PropertiesHeader, PropertyLabel, SliderHandle, SliderMarks, Status, Switch, Tooltip, Lock03, StatusFlyout, Eye, ClockRewind2, File05, ActionID.

---

## CONTENT FUNDAMENTALS

Lyra is enterprise software for contact-center operators. Copy follows that:

**Voice.** Plainspoken, calm, instructive. Lyra never marketing-speaks. The Figma annotations themselves are the model — direct sentences, no hype: *"Background tokens for active or selected states… brand-derived and themeable."* / *"Opacity-based disabled foreground. Works on any background by design."*

**Person.** Imperative + third-person describing the system. *"Pair with bg-disabled for a complete disabled control."* / *"Used for active filters, selected nav items, highlighted rows."* User-facing UI uses second person sparingly: *"Your projects"*, *"You have 3 unread"*. Avoid we/our.

**Casing.** Sentence case for everything except top-level page titles and proper nouns. Buttons: "Save changes", "Add channel", not "Save Changes". Section headers in the Agent app are uppercase-tracked (Open Sans Bold 13/22) — that's a **legacy SOL pattern**; Lyra moves to sentence-case 14/20 Medium.

**Density.** High. CXone screens are dashboards; type is small (12–14px is normal in tables). Labels are 14px Medium; metadata is 12px Regular.

**Tone in errors.** Specific, never apologetic. *"This number is already in your queue."* not *"Oops! Something went wrong."* Errors carry a destructive icon (red filled circle with `i`) and the actionable phrase first.

**No emoji.** Lyra has zero emoji in the source — UI uses iconography. Don't introduce emoji in components.

**Numbers, units, time.** Numerals always (`3 contacts`, never *three contacts*). 24-hour time in monitoring contexts; 12h in user profiles. Currency follows the customer's locale.

**Examples (from the file):**
- `Heading XL` / `Body LG emphasized` — token names are kebab-case, descriptive, never cute.
- *"Floating panels, dropdowns, popovers, and tooltips that float above page content."* — explanatory and complete.
- *"For accessibility compliance, always use with an active-strong border or high contrast foreground indication."* — guidance is prescriptive.

---

## VISUAL FOUNDATIONS

**Brand color.** Primary is `#166CCA` (`--lyra-color-bg-primary`), with `#185BA4` for links/active-strong states and hover/press darkening further (`--lyra-color-state-bg-hover-primary` / `-pressed-primary`). Avoid lavender/purple gradients except for AI surfaces (`--lyra-color-accent-purple-strong` `#6149C1`, or the AI field wash `--lyra-color-bg-field-ai`).

**Neutrals.** Two ramps. **Slate** is the workhorse — every surface, divider, and text color comes from slate. **Gray** is a true-gray fallback used in legacy SOL screens (Open Sans + flat gray). New work should bias to slate.

**Type.** Inter at 10 / 12 / 14 / 16 / 20 / 24 / 28px via the repo's real classes: `.lyra-heading-2xl` (28/32/700, for standalone metric figures) down to `.lyra-heading-xs` (12/16/500), `.lyra-label` (14/20/500), and `.lyra-body-{lg,md,sm,xs}` (+`-emphasis` variants) — see `lyra-tokens.css`. Letter-spacing tightens as size grows: -0.02rem at 24–28px; +0.01rem at 10–12px. Monospace (code, IDs, timers) is **Cascadia Code**, self-hosted alongside Inter.

**Backgrounds.** Mostly flat. The shell uses `--lyra-color-bg-surface-shell` (`#F3F5F6`) with white panels (`--lyra-color-bg-surface-container`, `#FFFFFF`) inside. Dark theme swaps these to `#2E2E2E` shell / `#1F1F1E` container — see `[data-theme="dark"]` in `lyra-tokens.css`. No textures, no noise, no hand illustrations. Imagery (where used) is desaturated product photography, never decorative.

**Animation.** Sparse and snappy. 120–200ms on hover/state changes; standard ease (`cubic-bezier(0.4, 0, 0.2, 1)`). No bounces, no springs, no shimmer. Modals fade + 8px slide-up (200ms). Skeleton loaders use a 1.4s pulse, not a sweep.

**Hover.** Solid backgrounds darken one step (brand-500 → brand-600). Ghost / icon buttons gain a subtle slate-200 wash. Links underline on hover.

**Press.** No scale transforms. Solid backgrounds darken a second step (brand-600 → brand-700). Controls show focus ring on keyboard activation.

**Borders.** Always semi-transparent black (or white on dark): `--lyra-color-border-subtle` `rgba(0,0,0,.10)`, `-default` `.16`, `-medium` `.32`, `-strong` `.46`. This means borders blend correctly on tinted surfaces. Width itself is tokenized too: `--lyra-border-default` 1px, `-md` 2px, `-lg` 3px.

**Shadows.** Five tiers in `colors_and_type.css`. Cards in product mockups use `--elev-2` (`0 1px 2px / 1px 3px`). Floating panels (App Space) use `--elev-3`. Modals use `--elev-5`. Inner shadows are not used.

**Capsules vs gradients.** Lyra prefers **capsules** (chips, status pills with rounded corners) over gradient overlays. Active/selected states use a tinted background + a 1px brand-active border, never a glow.

**Layout.** Suite-shell layouts are fixed: a **56px top bar** (`Shell Top Bar`) and an **optional left rail**. Content is panelized — every screen is a grid of rounded (8px) white cards with `--elev-2`, separated by 16–24px gutters. The shell background bleeds between them.

### The Lyra suite shell (consolidated pattern)

Every CXone product page is the same chrome with different content. See `ui_kits/wem-lyra/` (RTA, Employees, Recommended Actions, Simulator, App switcher) for canonical implementations.

**Top bar (56px, `bg-surface-shell`).** Left → right:
- **NiCE smile mark** at 24×24, the `Black_Blue eyes` variant on light shells. The mark is the standalone brand lockup; the full `NiCE CXone` wordmark is reserved for marketing surfaces and the dark suite cover.
- **Product menu**: the current product/section name in Inter 500 14/20 with a chevron-down. Click opens the **app switcher dropdown** — sections in this order: *role surfaces* (Supervisor, Agent, Cognigy AI, My Zone), *workspaces* (Workforce Management, Performance Management, Interaction Hub), *analytics* (Dashboard, Analytics), *Admin*. Sections are separated by 1px hairlines, 6px gaps. The dropdown sits below the bar at `--elev-3`.
- **Right cluster**: Help · App-switcher · Notifications (with red dot-badge that includes a 2px shell-colored ring so it reads on the bar) · Avatar (28–30px circle, slate-700) followed by a chevron — the avatar+chev is the user menu trigger.

**Left rail (~232px wide).**
- A **circular collapse toggle** sits on the rail's right edge, bleeding 12px out into the main background. White fill, 1px hairline border, chevron-left when expanded.
- Items use 14px stroke-1.6 icons inheriting `currentColor`. Hover is `rgba(0,0,0,0.04)`. Active item gets `bg-active` (`#e9f1fc`) and `--color-fg-active` (`#185ba4`) — both icon and label tint together.
- Collapsible categories show a chevron-right that rotates -90° when collapsed; child leaves indent 24px and use 13/18 Regular slate-600 (active leaves match the parent active treatment).

**Page background and panels.**
- Shell background is `--lyra-color-bg-surface-shell` (`#f3f5f6`); never bleeds into content.
- Each page is a single white **panel** (12px radius, 1px `rgba(0,0,0,0.08)` border, no shadow) sitting in the main area with 8–12px outer gutters. Right-side rails (AI Assistant) are sibling panels to the main panel — same border + radius — separated by an 8px gap.
- Panel header: optional **breadcrumb row** (12px slate-500, slash separators, last crumb bold-slate-900), then `H1` page title in Inter 600 18/24 -0.01em with action buttons on the trailing edge (secondary `Import` then primary brand-blue `Create Employee`).

**Filter toolbar.**
- A row immediately below the page header containing **search input** (244px fixed, magnifier icon), then **filter chips**, then **`+ Add`** (dashed-border ghost), then **`Clear`** link.
- Filter chips have two states. **Active** = brand-blue 1px border, `bg-active` fill, value in slate-900 with the field label prefix in slate-500 ("Scheduling Unit: East Coast"), trailing × close. **Idle** = white fill, 1px slate border, label only ("Group", "Team", "Status"), still with × so the user can dismiss the chip itself. Chevron-down inside the chip indicates it's a multi-select picker.

**Metric strip (KPIs).**
- 4–6 small cards in a row beneath the toolbar. Each card is 8px radius, 12×18 padding, with a big number in Inter 700 26/30 -0.02em and a 12px slate-500 label below.
- Number color encodes status: slate-900 default, brand-blue for "in adherence", red-600 for "out of adherence", amber for "unmapped/at risk".
- The card representing the currently-applied filter slice gets the **brand-active KPI treatment**: `bg-active` fill, brand-blue 1px border, plus an additional 1px brand-blue box-shadow for emphasis.

**Tables.**
- Header row: 12/16 Medium slate-500, sticky, with a 1px hairline divider below.
- Body rows: 13/20 Regular slate-900, 12×24 padding, hairline dividers, hover `rgba(0,0,0,0.02)`.
- The first column is the entity name as a brand-blue link (Inter 500), making it the row affordance.
- "Needs attention" cells get a soft red wash (`#fde9e7`) on the metric column only — never the whole row, so the eye lands on the actionable number, not the agent's name.

**AI affordances.**
- A small **sparkle icon** (purple→blue gradient, 18×18) in the trailing edge of a page header means "AI assist this page". On hover it gains a thin purple border.
- Some products surface a permanent **AI Assistant rail** on the right of the main grid: 320px wide, panelized, with a centered orb (purple→blue gradient, 48px) + greeting ("Hi John, How can I help?") and a composer at the bottom. The composer holds a placeholder textarea, a small chip surface for context tags ("Analytics"), and a brand-blue square send button on the trailing edge.

**Tabs (in-page).**
- Sit just below the H1 inside the page header row. Active tab = brand-blue 2px underline, brand-active label color; idle = slate-500. Use for sibling views of the same page (Dashboard / Scenarios / Simulations), not for top-level navigation — that's the rail.

**Transparency / blur.** Used only on the backdrop behind modals (`rgba(0,0,0,0.40)`). No frosted glass. No translucent navs. The system is opaque.

**Imagery.** Cool, neutral. Product mockups in the file show desk/headset photography in muted blues and grays. No warm filters, no grain, no duotone.

**Corner radii.** `xs 4 / sm 6 / md 8 / lg 12 / xl 16 / round`. Buttons: 6px. Inputs: 6px. Cards: 8–12px. Modals: 12px. Avatars: round. The 16px radius is reserved for hero/section frames in design docs (the foundation cards use 16px).

**Cards.** White surface (`#FFFFFF`), 1px `rgba(0,0,0,0.10)` border, 8–12px radius, `--elev-2`. No left-border-accent pattern. Padding usually 16px or 24px.

**Density modes.** Lyra ships compact-by-default; comfortable mode adds 4px to row heights. (See `Sizes` page in Figma.)

---

## ICONOGRAPHY

**System.** Lyra has its own icon set inside the file under `/Icons-Images` — 16×16 monochrome SVGs grouped by intent: `Action/*`, `Navigation/*`, `Alert/*`, `Channel/*`, `Date-time/*`, `File/*`, `People/*`, `System/*`. Names are kebab-cased (e.g. `Navigation/Arrows-Double-Down`, `Action/Search`, `Channel-Type/Webchat`).

**Style.** Uniform 1.5px stroke OR solid fill (action icons use stroke; status indicators use fill — e.g. red error circle). Square cap, square join. Pixel-aligned to 16×16 box. Inherits `currentColor`, so swapping color is `color: var(--color-fg-action)` on the parent.

**Sizes.** 16px in lists/tables/buttons. 20px in toolbars. 36px in placeholder/empty-state slots (the `general/placeholder` token). Larger sizes are interpolated, not redrawn.

**Format.** Inline SVG (preferred) or `<img src="…svg">` for distribution. The Figma file ships them as discrete SVGs — we copied a representative subset to `assets/icons/`. **For new icons, prefer the existing Lyra set; if missing, substitute from [Lucide](https://lucide.dev) at the same stroke weight and flag it.**

**Emoji.** Not used. **Unicode glyphs.** Not used as iconography.

**Logos.** The official NiCE+CXone lockups live in `assets/lockups/` (black / white / black-and-blue / white-and-blue, each with a 1-line variant and a with-smile variant) and the standalone smile mark in `assets/nice-smile-*.svg`. Both are the real brand files (fills injected — the source SVGs ship with empty `<defs>`), not a re-typeset approximation. Never re-typeset; treat as fixed lockups.

**Substitutions in this skill.** Where a specific icon is needed but not yet copied from the Figma binary, use [Lucide](https://lucide.dev) at the closest match (e.g. `chevron-down`, `x`, `search`, `plus`, `more-horizontal`). All Lucide icons render at the same 1.5px stroke as Lyra. Flag the substitution in your delivery copy.

---

## CAVEATS

- **Fonts.** Inter and Cascadia Code are both self-hosted from local Variable TTFs (`fonts/`, regular + italic each). Inter is the system typeface everywhere, including the wordmark; Cascadia Code is `--font-mono` (code, IDs, timers). **Open Sans** (used by legacy SOL screens) is on Google Fonts if you need to mock pre-Lyra surfaces.
- **GitHub repo.** `davidbauerjr991/lyra-ui` is now connected. `lyra-tokens.css` is a verbatim sync of its `src/styles/lyra-tokens.css` — the real light+dark token values and typography classes. Components themselves (buttons, inputs, tables, etc.) are still visual recreations in the `ui_kits/`/`preview/` HTML, not the repo's actual React/Tailwind source — re-check against `src/components/` if you need pixel-exact component internals.
- **Legacy SOL screens.** Some Figma frames (CXone Agent, RTA Summary) are still on Open Sans / SOL chrome. The UI kit recreates them faithfully — they aren't yet on Lyra tokens.
- **Legacy alias drift.** The old `--color-*` / `--lyra-brand-*` names (used across earlier preview cards and UI kits) now resolve to the real `--lyra-color-*` tokens, but a few hardcoded hex values may still linger in older markup — prefer `var(--lyra-color-*)` directly in any new work.
