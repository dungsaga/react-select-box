var React = require('react')
var SelectBox = React.createFactory(require('../lib/select-box'))

var div = React.createElement.bind(null,'div')
var option = React.createElement.bind(null,'option')
var h1 = React.createElement.bind(null,'h1')

var Example = React.createFactory(React.createClass({displayName: 'Example',
  getInitialState: function () {
    return {
      color: null,
      colors: []
    }
  },
  handleChange: function (color) {
    this.setState({ color: color })
  },
  handleMultiChange: function (colors) {
    this.setState({ colors: colors })
  },
  render: function () {
    return(
      div({className: "example"},
        h1(null, "Select Box Example"),
        SelectBox(
          {
            label: "Notable OS",
            className: 'my-example-select-box',
            onChange: this.handleChange,
            value: this.state.color
          },
          option({key: "Penguin",     value: "Penguin"    }, "Ubuntu Utopic Unicorn"),
          option({key: "Gorilla",     value: "Gorilla"    }, "Windows 7/ate/9"),
          option({key: "iKidYouNot",  value: "iKidYouNot" }, "i/watch/tv OS"),
          option({key: "New kids",    value: "New kids"   }, "Android, ChromeOS/ChromiumOS"),
          option({key: "Old boys",    value: "Old boys"   }, "AmigaOS, Acorn RISC OS, Atari TOS, Commodore GEOS, CP/M, MS-DOS"),
          option({key: "Inspirators", value: "Inspirators"}, "BeOS/HaikuOS, Oberon, Visi On, Pilot, PLATO (on ILLIAC I)"),
          option({key: "Alien",       value: "Alien"      }, "Plan 9 from Bell Labs"),
          option({key: "Big macs",    value: "Big macs"   }, "NeXTSTEP, OS X, Mac OS"),
          option({key: "Godfathers",  value: "Godfathers" }, "Linux, Unix, Unics, *nix, *BSD"),
          option({key: "Big irons",   value: "Big irons"  }, "OS/360, z/OS, OpenVMS"),
          option({key: "Outliners",   value: "Outliners"  }, "OpenWRT, NetWare, OS/2")
        ),
        h1(null, "Multi Select Example"),
        SelectBox(
          {
            label: "Favorite Colors",
            onChange: this.handleMultiChange,
            value: this.state.colors,
            multiple: true
          },
          option({value: 'red'}, 'Red'),
          option({value: 'green'}, 'Green'),
          option({value: 'blue'}, 'Blue'),
          option({value: 'black'}, 'Black'),
          option({value: 'orange'}, 'Orange'),
          option({value: 'greenish'}, 'Light greenish with a little bit of yellow')
        )
      )
    )
  }
}))

React.render(Example(null), document.body)
