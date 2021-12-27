export function Calendly (): JSX.Element {
  return (
    <>
      <div className="calendly-inline-widget" data-url="https://calendly.com/paulperson-pro/test" style={{ minWidth: "320px", height: "630px" }}></div>
      <script type="text/javascript" src="https://assets.calendly.com/assets/external/widget.js" async></script>
    </>
  )
}