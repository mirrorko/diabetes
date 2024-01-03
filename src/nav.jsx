import { HomeOutlined, LineChartOutlined } from "@ant-design/icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMap } from "@fortawesome/free-solid-svg-icons";
export const navItems = [
  {
    label: <a href="/">Home</a>,
    key: "home",
    icon: <HomeOutlined />,
  },
  {
    label: <a href="/bg">Blood Glucose Record</a>,
    key: "blood",
    icon: <LineChartOutlined />,
  },

  {
    label: "Travel tool",
    key: "SubMenu",

    icon: <FontAwesomeIcon icon={faMap} />,
    children: [
      {
        label: <a href="/map">hospital</a>,
        key: "hospital",
      },
      {
        label: <a href="/map">restaurant</a>,
        key: "restaurant",
      },
    ],
  },
];
