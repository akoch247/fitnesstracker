import { useParams } from "react-router";
import { useNavigate } from "react-router";
import useQuery from "../api/useQuery";
import useMutation from "../api/useMutation";

export default function SingleActivity() {
    const { activityId } = useParams();
    const navigate = useNavigate();
    const { token } = useAuth();
    const {
        data: activities,
        loading,
        error,
      } = useQuery("/activities", "activities");
    
}