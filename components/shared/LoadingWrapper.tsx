import { Skeleton } from "../ui/skeleton";

const LoadingWrapper = ({
  children,
  isLoading = true,
}: {
  children: React.ReactNode;
  isLoading?: boolean;
}) => {
  return isLoading ? <Skeleton className="h-6 mt-1" /> : <>{children}</>;
};

export default LoadingWrapper;
