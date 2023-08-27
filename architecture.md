Logged Out State
- Nav bar has login / sign-up when not logged in
- Home page has login / sign-up when not logged in
-- these are links
- Sign Up Form (new component) - New Path
-- no loading ... which seems bad
- Login Form (new component) - New Path
-- login process has no loading
-- first re-renders home page w/ logged out state (we should try to avoid this)
-- then re-renders again with logged in state
-- note: looks like they have single Home component for both login states
- RouteList enforces must be logged in and re-directs to Home if not


Logged In State
- Home page says Welcome Back, [user]
- Nav bar has Profile link + Logout [user]
- Profile Form (new component) - New Path
- Logout takes back to home page in logged out state
- Company List, Company Details, Job List, Job Card List - NOTHING NEW
- Job Card - NEW
-- Has apply button
